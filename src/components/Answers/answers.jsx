import React from 'react';
import { useState, useEffect } from 'react';

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

  const abcd = ['a', 'b', 'c', 'd'];

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
      <div className='app-body'>
        {scrambled_order.map((index, i) => (
          <button
            key={`ch</div>oice${index}`}
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
            {`${abcd[i]}: ${choices[`choice${index}`]}`}
          </button>
        ))}
      </div>
    </>
  );
}

export default Answers;
