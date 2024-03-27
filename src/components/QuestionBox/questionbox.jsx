import React from 'react';
import Answers from '../Answers/answers';

// function QuestionBox({challenge, clicked, setClicked, correctCount, setCorrectCount}) {
function QuestionBox({challenge, correctCount, setCorrectCount}) {
  return (
    <div>
      {challenge.map((item, index) => (
        <div key={index}>
          <p>question: {item.question}</p>
          <div className='app-body'>
            {/* {item.choices ? <Answers choices={item.choices} correctAnswer={item.answer} clicked={clicked} setClicked={setClicked} correctCount={correctCount} setCorrectCount={setCorrectCount} /> : 'Loading...'} */}
            {item.choices ? <Answers choices={item.choices} correctAnswer={item.answer} correctCount={correctCount} setCorrectCount={setCorrectCount} /> : 'Loading...'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionBox;
