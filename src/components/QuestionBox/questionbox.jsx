import React from 'react';
import Answers from '../Answers/answers';
import './questionbox.css';

function QuestionBox({challenge, correctCount, setCorrectCount}) {
  return (
    <div >
      {challenge.map((item, index) => (
        <div className='challenge' key={index}>
          <div className="question-text">
            <p><strong>Q{index + 1}:</strong> {item.question}</p>
          </div>
          <div className='answers'>
            {/* {item.choices ? <Answers choices={item.choices} correctAnswer={item.answer} clicked={clicked} setClicked={setClicked} correctCount={correctCount} setCorrectCount={setCorrectCount} /> : 'Loading...'} */}
            {item.choices ? <Answers choices={item.choices} correctAnswer={item.answer} correctCount={correctCount} setCorrectCount={setCorrectCount} /> : 'Loading...'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionBox;
