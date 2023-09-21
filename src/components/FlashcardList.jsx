import React from 'react';
import Flashcard from './Flashcard';

function FlashcardList() {
    const flashcards = [
        { id: 1, question: 'test question', answer: 'test answer' },
    ];

    return (
        <div className="flashcard-list">
            {flashcards.map(flashcard => (
                <Flashcard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
    );
}

export default FlashcardList;
