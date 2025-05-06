import { readFile } from "fs/promises";
import * as path from "path";
import AdmZip from "adm-zip"; // Fixed import to use default import
import * as xml2js from "xml2js";

/**
 * Extracts text content from a PowerPoint (.pptx) file
 * @param filePath - Path to the .pptx file
 * @returns Promise resolving to the extracted text content
 */
export async function extractTextFromPPTX(filePath: string): Promise<string> {
  try {
    // Read the PPTX file as a buffer
    const fileBuffer = await readFile(filePath);
    
    // Create a new AdmZip instance with the buffer
    const zip = new AdmZip(fileBuffer);
    
    // Get all entries (files) in the zip
    const zipEntries = zip.getEntries();
    
    // Filter to only get slide XML files
    const slideEntries = zipEntries.filter((entry: AdmZip.IZipEntry) => 
      entry.entryName.startsWith('ppt/slides/slide') && 
      entry.entryName.endsWith('.xml')
    );
    
    // Sort slides by number to maintain order
    slideEntries.sort((a: AdmZip.IZipEntry, b: AdmZip.IZipEntry) => {
      const numA = parseInt(a.entryName.replace(/\D/g, ''));
      const numB = parseInt(b.entryName.replace(/\D/g, ''));
      return numA - numB;
    });
    
    // Process each slide and extract text
    let allText = "";
    
    for (const slideEntry of slideEntries) {
      const slideXml = zip.readAsText(slideEntry.entryName);
      const slideText = await extractTextFromSlide(slideXml);
      allText += `\n--- Slide ${path.basename(slideEntry.entryName)} ---\n${slideText}\n`;
    }
    
    console.log(`📑 Extracted text from ${slideEntries.length} slides`);
    return allText;
  } catch (error) {
    console.error("❌ Error extracting text from PPTX:", error);
    throw error;
  }
}

/**
 * Extract text from slide XML content
 */
async function extractTextFromSlide(slideXml: string): Promise<string> {
  try {
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(slideXml);
    
    // Define recursive function before using it
    const extractTextElements = (obj: any): string[] => {
      if (!obj) return [];
      
      if (typeof obj === "string") return [obj];
      
      if (Array.isArray(obj)) {
        return obj.flatMap(item => extractTextElements(item));
      }
      
      if (typeof obj === "object") {
        // Check if this is a text element (<a:t>)
        if (obj["a:t"]) {
          return obj["a:t"].map((text: any) => {
            return typeof text === "string" ? text : JSON.stringify(text);
          });
        }
        
        // Otherwise, search all properties
        return Object.values(obj).flatMap(value => extractTextElements(value));
      }
      
      return [];
    };
    
    const textElements = extractTextElements(result);
    return textElements.join("\n");
  } catch (error) {
    console.error("❌ Error parsing slide XML:", error);
    return "";
  }
}