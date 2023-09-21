import React from 'react';
import Flashcard from './Flashcard';

function FlashcardList() {
    const flashcards = [
        { id: 1, question: 'test question', answer: 'test answer' },
        { id: 2, question: 'test question', answer: 'test answer' },
        { id: 3, question: 'test VERY LOOOOOOOOOOOOOOOOONGGGGGGGGGGGGGGGGGGGGGGGGG QUESTIONNNNNNNNNNN', answer: 'test LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGGGGGGGGGGGGGGGGGGGGGGanswer' },
        { id: 4, question: 'test question', answer: 'test answer' },
        { id: 5, question: 'test question', answer: 'test answer' },
        { id: 6, question: 'test question', answer: 'test answer' },
        { id: 7, question: 'test question', answer: 'test answer' },
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
