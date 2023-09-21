import React, { useState } from 'react';

function Flashcard({ flashcard }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flashcard-content">
                <div className="flashcard-text">
                    {isFlipped ? flashcard.answer : flashcard.question}
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
