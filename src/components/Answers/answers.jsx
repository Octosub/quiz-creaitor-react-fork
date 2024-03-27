import React from 'react';
import { useState } from 'react';

function Answers({ choices, correctAnswer, setCorrectCount}) {
  const [isCorrect, setIsCorrect] = useState({});
  const [clicked, setClicked] = useState({});

  const handleAnswerClick = (answer, questionId) => {
    console.log(`Clicked answer: ${answer}`);
    console.log(choices);
    // console.log(questionId);
    // console.log(typeof(questionId));
    // console.log(questionId === 'question3');
    // console.log(clicked[questionId]);
    if (!clicked[questionId] === true) {
      if (answer === correctAnswer) {
        // If the answer is correct, set all answers to "clicked"
        setClicked(prevState => ({ ...prevState, [questionId]: true }));
        setIsCorrect(prevState => ({ ...prevState, [questionId]: true }));
        setCorrectCount(prevState => prevState + 1);
        // setShouldUpdateCorrectCount(true);
      } else {
        setClicked(prevState => ({ ...prevState, [questionId]: true }));
        setIsCorrect(prevState => ({ ...prevState, [questionId]: false }));
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
          onClick={() => handleAnswerClick(choices.choice1, 'question1')}
          style={{ backgroundColor: clicked['question1'] && (checkIfCorrect(choices.choice1) || correctAnswer === 'choice1') ? 'green' : clicked['question1'] ? 'red' : 'gray' }}
        >
          a: {choices.choice1}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice2, 'question2')}
          style={{ backgroundColor: clicked['question2'] && (checkIfCorrect(choices.choice2) || correctAnswer === 'choice2') ? 'green' : clicked['question2'] ? 'red' : 'gray' }}
        >
          b: {choices.choice2}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice3, 'question3')}
          style={{ backgroundColor: clicked['question3'] && (checkIfCorrect(choices.choice3) || correctAnswer === 'choice3') ? 'green' : clicked['question3'] ? 'red' : 'gray' }}
        >
          c: {choices.choice3}
        </button>
        <button
          onClick={() => handleAnswerClick(choices.choice4, 'question4')}
          style={{ backgroundColor: clicked['question4'] && (checkIfCorrect(choices.choice4) || correctAnswer === 'choice4') ? 'green' : clicked['question4'] ? 'red' : 'gray' }}
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
