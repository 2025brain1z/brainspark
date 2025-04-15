import React from "react";

interface DifficultyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDifficulty: (difficulty: string) => void;
}

const DifficultyModal: React.FC<DifficultyModalProps> = ({
  isOpen,
  onClose,
  onSelectDifficulty,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Difficulty</h2>
        <button onClick={() => onSelectDifficulty("beginner")}>Beginner</button>
        <button onClick={() => onSelectDifficulty("intermediate")}>
          Intermediate
        </button>
        <button onClick={() => onSelectDifficulty("advanced")}>Advanced</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DifficultyModal;
