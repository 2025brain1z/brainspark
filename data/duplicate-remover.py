import os
import hashlib
import re
import glob
from typing import List, Dict, Tuple, Any

def parse_ts_declaration_file(file_path: str) -> List[Dict]:
    """Parse TypeScript declaration file to extract question objects."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract the array part after "export const questions = ["
        match = re.search(r'export\s+const\s+questions\s*=\s*\[(.*)\];', content, re.DOTALL)
        if not match:
            print(f"Error: Could not find export const questions = [] in {file_path}")
            return None
            
        array_content = match.group(1).strip()
        
        # Parse the objects in the array
        questions = []
        object_pattern = re.compile(r'\{(.*?)\}', re.DOTALL)
        for obj_match in object_pattern.finditer(array_content):
            obj_str = obj_match.group(1).strip()
            question_obj = {}
            
            # Extract key-value pairs
            for line in obj_str.split('\n'):
                line = line.strip()
                if not line or line.startswith('//') or line == ',':
                    continue
                    
                # Match key: value pattern
                kv_match = re.search(r'(\w+):\s*(".*?"|\'.*?\'|\[.*?\]|\w+)', line)
                if kv_match:
                    key = kv_match.group(1).strip()
                    value = kv_match.group(2).strip()
                    
                    # Handle arrays
                    if value.startswith('[') and value.endswith(']'):
                        # Parse the array
                        items = []
                        array_items = re.findall(r'"(.*?)"|\'(.*?)\'', value)
                        for item in array_items:
                            # Each item is a tuple with two groups, one will be empty
                            items.append(item[0] if item[0] else item[1])
                        question_obj[key] = items
                    else:
                        # Handle string values
                        if (value.startswith('"') and value.endswith('"')) or \
                           (value.startswith("'") and value.endswith("'")):
                            value = value[1:-1]  # Remove quotes
                        
                        question_obj[key] = value
            
            if question_obj:
                questions.append(question_obj)
                
        return questions
        
    except Exception as e:
        print(f"Error parsing file {file_path}: {e}")
        return None

def save_ts_declaration_file(questions: List[Dict], file_path: str) -> bool:
    """Save questions as a TypeScript declaration file with unquoted keys."""
    try:
        # Create the export const questions structure
        content = "export const questions = [\n"
        
        for i, question in enumerate(questions):
            content += "  {\n"
            
            # Add each key-value pair
            for key, value in question.items():
                if key == "options" and isinstance(value, list):
                    # Format options array
                    options_str = "[\n      " + ",\n      ".join(f'"{item}"' for item in value) + "\n    ]"
                    content += f"    {key}: {options_str},\n"
                elif isinstance(value, str):
                    # Format string values
                    content += f'    {key}: "{value}",\n'
                else:
                    # Format other values
                    content += f"    {key}: {value},\n"
                    
            content += "  }"
            if i < len(questions) - 1:
                content += ","
            content += "\n"
            
        content += "];\n"
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        return True
        
    except Exception as e:
        print(f"Error saving file {file_path}: {e}")
        return False

def get_question_hash(question: Dict) -> str:
    """Generate a hash for a question based on its full content."""
    question_text = question.get("question", "")
    return hashlib.md5(question_text.encode()).hexdigest()

def find_duplicates(questions: List[Dict]) -> Tuple[List[Dict], List[Dict], List[int]]:
    """Find duplicate questions and return unique questions, duplicates, and duplicate indices."""
    unique_questions = []
    duplicate_questions = []
    duplicate_indices = []
    seen_hashes = set()
    
    for i, question in enumerate(questions):
        question_hash = get_question_hash(question)
        
        if question_hash in seen_hashes:
            duplicate_questions.append(question)
            duplicate_indices.append(i)
        else:
            unique_questions.append(question)
            seen_hashes.add(question_hash)
    
    return unique_questions, duplicate_questions, duplicate_indices

def process_file(file_path: str) -> None:
    """Process a single TypeScript declaration file to find and remove duplicates."""
    print(f"\n{'='*60}\nProcessing file: {file_path}\n{'='*60}")
    
    # Load questions from file
    questions = parse_ts_declaration_file(file_path)
    if questions is None or not questions:
        print("Skipping to next file.")
        return
    
    # Find duplicates
    unique_questions, duplicate_questions, duplicate_indices = find_duplicates(questions)
    
    # No duplicates found
    if not duplicate_questions:
        print(f"No duplicates found in {file_path}. Total questions: {len(questions)}")
        return
    
    # Show duplicates to user
    print(f"Found {len(duplicate_questions)} duplicates in {file_path}")
    print(f"Original questions: {len(questions)}, Unique questions: {len(unique_questions)}")
    
    # Display the first few duplicates for user to review
    max_display = min(5, len(duplicate_questions))
    print(f"\nShowing first {max_display} of {len(duplicate_questions)} duplicates:")
    for i in range(max_display):
        q = duplicate_questions[i]
        idx = duplicate_indices[i]
        q_text = q.get("question", "")
        print(f"\nDuplicate {i+1} (at index {idx}):")
        print(f"Question: {q_text[:100]}..." if len(q_text) > 100 else f"Question: {q_text}")
    
    # Ask for confirmation
    while True:
        user_input = input(f"\nDo you want to remove {len(duplicate_questions)} duplicates from {file_path}? (y/n): ").lower().strip()
        if user_input in ('y', 'yes'):
            # Save the file with duplicates removed
            if save_ts_declaration_file(unique_questions, file_path):
                print(f"Successfully removed {len(duplicate_questions)} duplicates from {file_path}")
            else:
                print(f"Failed to save changes to {file_path}")
            break
        elif user_input in ('n', 'no'):
            print(f"Keeping all questions in {file_path}")
            break
        else:
            print("Please enter 'y' or 'n'")

def main():
    print("Duplicate Remover for TypeScript Declaration Files")
    print("------------------------------------------------")
    
    # Get all .d.ts files in current directory
    ts_files = glob.glob("*.d.ts")
    
    if not ts_files:
        print("No .d.ts files found in the current directory.")
        return
    
    print(f"Found {len(ts_files)} .d.ts files in the current directory.")
    
    # Process each file
    for file_path in ts_files:
        process_file(file_path)
    
    print("\nAll files processed.")

if __name__ == "__main__":
    main()