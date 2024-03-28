import React from 'react';
import { useState } from 'react';
import './answers.css';

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

  let order = [1, 2, 3, 4];
  return (
    <>
      <div className='app-body answers'>
        {order.map((index) => (
          <button
            key={`choice${index}`}
            onClick={() => handleAnswerClick(choices[`choice${index}`], `choice${index}`)}
            style={{
              backgroundColor:
                clicked[`choice${index}`] &&
                (checkIfCorrect(choices[`choice${index}`]) || correctAnswer === `choice${index}`)
                  ? 'green'
                  : clicked[`choice${index}`]
                  ? 'red'
                  : 'gray',
            }}
          >
            {choices[`choice${index}`]}
          </button>
        ))}
        {/* {isCorrect === null ? <p></p> : isCorrect ? <p>Correct!</p> : <p>Incorrect</p>} */}
      </div>
    </>
  );
}

export default Answers;
