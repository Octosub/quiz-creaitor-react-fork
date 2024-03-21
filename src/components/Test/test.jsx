import React from 'react';
// import "./Test.css";
import QuestionBox from '../QuestionBox/questionbox';

function Test({test}) {
  return (
    <div>
      <p>ID: {test.id}</p>
      <p>Max Score: {test.max_score}</p>
      <p>Time: {test.time}</p>
      <div className='app-body'>
        {test ? <QuestionBox test={test}/> : 'Loading...'}
      </div>
      <p>Created At: {test.created_at}</p>
      <p>Updated At: {test.updated_at}</p>
    </div>
  );
}

export default Test;
