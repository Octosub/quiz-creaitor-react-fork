import React from 'react';
import { useState, useEffect } from 'react';
import './answers.css';


function Answers({ choices, correctAnswer, setCorrectCount}) {
  const [isCorrect, setIsCorrect] = useState({});
  const [clicked, setClicked] = useState({});
  const [scrambled_order, setScrambledOrder] = useState([1, 2, 3, 4]);


  const handleAnswerClick = (answer, choiceId) => {
    console.log(`Clicked answer: ${answer}`);
    if (!clicked[choiceId] === true) {
      let newClicked = { ...clicked };
      let newIsCorrect = { ...isCorrect };
      if (answer === correctAnswer) {
        newIsCorrect[choiceId] = true;
        setCorrectCount(prevState => prevState + 1);
      } else {
        newClicked[choiceId] = true;
        newIsCorrect[choiceId] = false;
      }
      setClicked(newClicked);
      setIsCorrect(newIsCorrect);
      Object.keys(choices).forEach(choiceId => {
        newClicked[choiceId] = true;
      });
    }
  };

  const checkIfCorrect = (choice) => {
    if (choice === correctAnswer) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    let order = [...scrambled_order];
    for (let i = order.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    setScrambledOrder(order);
  }, []);

  return (
    <>
      <div className='answers-container'>
        {scrambled_order.map((index) => (

          <button
            key={`choice${index}`}
            onClick={() => handleAnswerClick(choices[`choice${index}`], `choice${index}`)}
            className={
              clicked[`choice${index}`] &&
              (checkIfCorrect(choices[`choice${index}`]) || correctAnswer === `choice${index}`)
                ? 'correct-answer'
                : clicked[`choice${index}`]
                ? 'wrong-answer'
                : 'neutral-answer'
            }
          >
            {`${choices[`choice${index}`]}`}
          </button>
        ))}
      </div>
    </>
  );
}

export default Answers;
