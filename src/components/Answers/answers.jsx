import React from 'react';
import { useState } from 'react';

function Answers({ choices, correctAnswer, setCorrectCount}) {
  const [isCorrect, setIsCorrect] = useState({});
  const [clicked, setClicked] = useState({});

  const handleAnswerClick = (answer, choiceId) => {
    console.log(`Clicked answer: ${answer}`);
    if (!clicked[choiceId] === true) {
      if (answer === correctAnswer) {
        console.log(Object.keys(choices));
        Object.keys(choices).forEach(choiceId => {
          setClicked(prevState => ({ ...prevState, [choiceId]: true }));
          console.log(choiceId);
        });
        setIsCorrect(prevState => ({ ...prevState, [choiceId]: true }));
        setCorrectCount(prevState => prevState + 1);
      } else {
        setClicked(prevState => ({ ...prevState, [choiceId]: true }));
        console.log(choiceId);
        setIsCorrect(prevState => ({ ...prevState, [choiceId]: false }));
      }
    }
  };

  const checkIfCorrect = (choice) => {
    if (choice === correctAnswer) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
    <div className='app-body'>
        <button
          onClick={() => handleAnswerClick(choices.choice1, 'choice1')}
          style={{ backgroundColor: clicked['choice1'] && (checkIfCorrect(choices.choice1) || correctAnswer === 'choice1') ? 'green' : clicked['choice1'] ? 'red' : 'gray' }}
        >
          a: {choices.choice1}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice2, 'choice2')}
          style={{ backgroundColor: clicked['choice2'] && (checkIfCorrect(choices.choice2) || correctAnswer === 'choice2') ? 'green' : clicked['choice2'] ? 'red' : 'gray' }}
        >
          b: {choices.choice2}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice3, 'choice3')}
          style={{ backgroundColor: clicked['choice3'] && (checkIfCorrect(choices.choice3) || correctAnswer === 'choice3') ? 'green' : clicked['choice3'] ? 'red' : 'gray' }}
        >
          c: {choices.choice3}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice4, 'choice4')}
          style={{ backgroundColor: clicked['choice4'] && (checkIfCorrect(choices.choice4) || correctAnswer === 'choice4') ? 'green' : clicked['choice4'] ? 'red' : 'gray' }}
        >
          d: {choices.choice4}
        </button>
        {isCorrect === null ? (
          <p></p>
        ) : (
          isCorrect ? <p>Correct!</p> : <p>Incorrect</p>
        )}
      </div></>
  );
}

export default Answers;
