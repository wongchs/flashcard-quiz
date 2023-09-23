import React, { useState } from 'react';

function Flashcard({ flashcard, onEdit, onDelete }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [editedFlashcard, setEditedFlashcard] = useState({ ...flashcard });

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleEdit = () => {
        onEdit(editedFlashcard);
        setIsFlipped(false);
    };

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flashcard-content">
                {isFlipped ? (
                    <div className="flashcard-text">
                        {flashcard.answer}
                    </div>
                ) : (
                    <div>
                        <textarea
                            rows="2"
                            value={editedFlashcard.question}
                            onChange={(e) => setEditedFlashcard({ ...editedFlashcard, question: e.target.value })}
                        />
                        <textarea
                            rows="2"
                            value={editedFlashcard.answer}
                            onChange={(e) => setEditedFlashcard({ ...editedFlashcard, answer: e.target.value })}
                        />
                        <button onClick={handleEdit}>Save</button>
                        <button onClick={onDelete}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Flashcard;
