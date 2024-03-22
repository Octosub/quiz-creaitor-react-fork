import React from 'react';
import { useState } from 'react';

function Answers({ choices, correctAnswer, clicked, setClicked }) {
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

  const handleAnswerClick = (answer) => {
    console.log(`Clicked answer: ${answer}`);
    setClicked(true);
    if (clicked === false) {
      if (answer === correctAnswer) {
        setIsCorrect(true);
        setCorrectCount(correctCount + 1);
      } else {
        setIsCorrect(false);
      }
    }
  };

  const checkIfCorrect = (choice) => {
    if (choice === correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <><div>
      <h5>Your current score: {correctCount * 10}</h5>
    </div>

    <div className='app-body'>
        <button
          onClick={() => handleAnswerClick(choices.choice1)}
          style={{ backgroundColor: clicked && (checkIfCorrect(choices.choice1) || correctAnswer === 'choice1') ? 'green' : clicked ? 'red' : 'gray' }}
        >
          a: {choices.choice1}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice2)}
          style={{ backgroundColor: clicked && (checkIfCorrect(choices.choice2) || correctAnswer === 'choice2') ? 'green' : clicked ? 'red' : 'gray' }}
        >
          b: {choices.choice2}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice3)}
          style={{ backgroundColor: clicked && (checkIfCorrect(choices.choice3) || correctAnswer === 'choice3') ? 'green' : clicked ? 'red' : 'gray' }}
        >
          c: {choices.choice3}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice4)}
          style={{ backgroundColor: clicked && (checkIfCorrect(choices.choice4) || correctAnswer === 'choice4') ? 'green' : clicked ? 'red' : 'gray' }}
        >
          d: {choices.choice4}
        </button>
        {isCorrect === null ? (
          <p></p>
        ) : (
          isCorrect ? <p>Correct!</p> : <p>Incorrect, try again.</p>
        )}
      </div></>
  );
}

export default Answers;
