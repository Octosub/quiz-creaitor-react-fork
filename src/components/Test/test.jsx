import React from 'react';
import "./test.css";
import QuestionBox from '../QuestionBox/questionbox';
// import { useState } from 'react';

// function Test({test, clicked, setClicked}) {
function Test({test, setCorrectCount, correctCount}) {
  // const [correctCount, setCorrectCount] = useState(0);

  let challengeArray;
  if (typeof test.challenges === 'string') {
    const challengeObject = JSON.parse(test.challenges);
    challengeArray = Object.values(challengeObject);
  } else {
    challengeArray = Object.values(test.challenges);
  }

  return (
    <>
    <div className='score'>
      <h5>Your current score: {correctCount * 10}</h5>
    </div>
    <div className='test'>
      <p>ID: {test.id}</p>
      <p>Max Score: {test.max_score}</p>
      <p>Time: {test.time}</p>
      <div className='challenges'>
        {/* {challengeArray ? <QuestionBox challenge={challengeArray} clicked={clicked} setClicked={setClicked} setCorrectCount={setCorrectCount} correctCount={correctCount}/> : 'Loading...'} */}
        {challengeArray ? <QuestionBox challenge={challengeArray} setCorrectCount={setCorrectCount} correctCount={correctCount}/> : 'Loading...'}
      </div>
    </div>
    </>
  );
}

export default Test;
