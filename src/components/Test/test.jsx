import React from 'react';
// import "./Test.css";
import QuestionBox from '../QuestionBox/questionbox';
import { useState } from 'react';

// function Test({test, clicked, setClicked}) {
function Test({test}) {
  const [correctCount, setCorrectCount] = useState(0);

  let challengeArray;
  if (typeof test.challenges === 'string') {
    const challengeObject = JSON.parse(test.challenges);
    challengeArray = Object.values(challengeObject);
  } else {
    challengeArray = Object.values(test.challenges);
  }

  return (
    <>
    <div>
      <h5>Your current score: {correctCount * 10}</h5>
    </div>
    <div>
      <p>ID: {test.id}</p>
      <p>Max Score: {test.max_score}</p>
      <p>Time: {test.time}</p>
      <div className='app-body'>
        {/* {challengeArray ? <QuestionBox challenge={challengeArray} clicked={clicked} setClicked={setClicked} setCorrectCount={setCorrectCount} correctCount={correctCount}/> : 'Loading...'} */}
        {challengeArray ? <QuestionBox challenge={challengeArray} setCorrectCount={setCorrectCount} correctCount={correctCount}/> : 'Loading...'}
      </div>
      <p>Created At: {test.created_at}</p>
      <p>Updated At: {test.updated_at}</p>
    </div>
    </>
  );
}

export default Test;
