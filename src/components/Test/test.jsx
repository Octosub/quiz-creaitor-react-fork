import React from 'react';
// import "./Test.css";
import QuestionBox from '../QuestionBox/questionbox';

function Test({test}) {
  // console.log(JSON.parse(test.challenges));
  // const challenge = JSON.parse(test.challenges);
  // const challengeObject = JSON.parse(test.challenges);
  // const challengeArray = Object.values(challengeObject);
  const challengeArray = Object.values(test.challenges);


  return (
    <div>
      <p>ID: {test.id}</p>
      <p>Max Score: {test.max_score}</p>
      <p>Time: {test.time}</p>
      <div className='app-body'>
        {console.log(typeof(challengeArray))}
        {console.log(typeof(challengeObject))}
        {challengeArray ? <QuestionBox challenge={challengeArray}/> : 'Loading...'}
      </div>
      <p>Created At: {test.created_at}</p>
      <p>Updated At: {test.updated_at}</p>
    </div>
  );
}

export default Test;
