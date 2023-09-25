import React, { useState, useEffect } from 'react';

function Flashcard({ flashcard, onEdit, onDelete }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedFlashcard, setEditedFlashcard] = useState({ ...flashcard });

    useEffect(() => {
        if (flashcard.question === '' || flashcard.answer === '') {
            setIsEditing(true);
        }
    }, [flashcard]);

    const handleFlip = () => {
        if (!isEditing) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        onEdit(editedFlashcard);
        setIsEditing(false);
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        setIsEditing(true);
    };

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flashcard-content">
                {isEditing ? (
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
                ) : (
                    <div className="flashcard-text">
                        {isFlipped ? flashcard.answer : flashcard.question}
                        {!isFlipped && <button onClick={handleEditClick}>Edit</button>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Flashcard;
