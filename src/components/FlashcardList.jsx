import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardList() {
    const [flashcards, setFlashcards] = useState([
        { id: 1, question: 'test question', answer: 'test answer' },
        { id: 2, question: 'test question', answer: 'test answer' },
        { id: 3, question: 'test VERY LOOOOOOOOOOOOOOOOONGGGGGGGGGGGGGGGGGGGGGGGGG QUESTIONNNNNNNNNNN', answer: 'test LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGGGGGGGGGGGGGGGGGGGGGGanswer' },
        { id: 4, question: 'test question', answer: 'test answer' },
        { id: 5, question: 'test question', answer: 'test answer' },
        { id: 6, question: 'test question', answer: 'test answer' },
        { id: 7, question: 'test question', answer: 'test answer' },
    ]);

    const addFlashcard = () => {
        const newId = Math.max(...flashcards.map(flashcard => flashcard.id)) + 1;
        const newFlashcard = { id: newId, question: '', answer: '' };
        setFlashcards([newFlashcard, ...flashcards]);
    };

    const editFlashcard = (id, updatedFlashcard) => {
        const updatedFlashcards = flashcards.map(flashcard =>
            flashcard.id === id ? updatedFlashcard : flashcard
        );
        setFlashcards(updatedFlashcards);
    };

    const deleteFlashcard = (id) => {
        const updatedFlashcards = flashcards.filter(flashcard =>
            flashcard.id !== id
        );
        setFlashcards(updatedFlashcards);
    };

    return (
        <div className="flashcard-list">
            <button className='new-card' onClick={addFlashcard}>Add Flashcard</button>
            {flashcards.map(flashcard => (
                <Flashcard
                    key={flashcard.id}
                    flashcard={flashcard}
                    onEdit={updatedFlashcard => editFlashcard(flashcard.id, updatedFlashcard)}
                    onDelete={() => deleteFlashcard(flashcard.id)}
                />
            ))}
        </div>
    );
}

export default FlashcardList;
