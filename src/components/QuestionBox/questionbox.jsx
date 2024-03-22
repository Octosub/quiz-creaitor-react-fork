import React from 'react';
import Answers from '../Answers/answers';

function QuestionBox({challenge, clicked, setClicked}) {
  const choices = challenge[0].choices;
  const correctAnswer = challenge[0].answer;

  return (
    <div>
      <p>question: {challenge[0].question}</p>
      {/* {console.log(challenge[0])} */}
      {/* {console.log(typeof(challenge))} */}
      {<div className='app-body'>
        {choices ? <Answers choices={choices} correctAnswer={correctAnswer} clicked={clicked} setClicked={setClicked}/> : 'Loading...'}
      </div>}
    </div>
  );
}

export default QuestionBox;
