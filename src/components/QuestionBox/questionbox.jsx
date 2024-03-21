import React from 'react';
import Answers from '../Answers/answers';

function QuestionBox({challenge}) {
  const choices = challenge[0].choices;

  return (
    <div>
      <p>question: {challenge[0].question}</p>
      {console.log(challenge[0])}
      {console.log(typeof(challenge))}
      {<div className='app-body'>
        {choices ? <Answers choices={choices}/> : 'Loading...'}
      </div>}
    </div>
  );
}

export default QuestionBox;
