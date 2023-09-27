import React, { useState, useEffect, useRef } from 'react';

function Flashcard({ flashcard, onEdit, onDelete }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDialogFlipped, setIsDialogFlipped] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedFlashcard, setEditedFlashcard] = useState({ ...flashcard });

    const dialogRef = useRef();

    useEffect(() => {
        if (flashcard.question === '' || flashcard.answer === '') {
            setIsEditing(true);
        }
    }, [flashcard]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dialogRef]);

    const handleFlip = () => {
        if (!isEditing) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleDialogFlip = (e) => {
        e.stopPropagation();
        setIsDialogFlipped(!isDialogFlipped);
    };

    const handleOpen = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    }

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
                    <div className="edit-view">
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
                        <button className="save-btn" onClick={handleEdit}>Save</button>
                        <button className="delete-btn" onClick={onDelete}>Delete</button>
                    </div>
                ) : (
                    <div className="flashcard-text">
                        {isFlipped ? flashcard.answer : flashcard.question}
                        {!isFlipped && <button className='edit-btn' onClick={handleEditClick}>Edit</button>}
                        {!isFlipped && <button className='open-btn' onClick={handleOpen}>Open</button>}
                    </div>
                )}
                {isOpen ? (
                    <dialog className={`opencard ${isDialogFlipped ? 'flipped' : ''}`} open onClick={handleDialogFlip} ref={dialogRef}>
                        <div className="opencard-content">
                            {isDialogFlipped ? flashcard.answer : flashcard.question}
                        </div>
                    </dialog>
                ) : null}
            </div>
        </div>
    );
}

export default Flashcard;
