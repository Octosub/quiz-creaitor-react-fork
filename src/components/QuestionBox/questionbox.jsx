import React from 'react';
import Answers from '../Answers/answers';

function QuestionBox({test}) {
  return (
    <div>
      <p>question: {test.challenges.challenge1.question}</p>
      <div className='app-body'>
        {test ? <Answers test={test}/> : 'Loading...'}
      </div>
    </div>
  );
}

export default QuestionBox;
