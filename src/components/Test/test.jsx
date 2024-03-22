import React from 'react';
// import "./Test.css";
import QuestionBox from '../QuestionBox/questionbox';

function Test({test, clicked, setClicked}) {
  let challengeArray;
  if (typeof test.challenges === 'string') {
    const challengeObject = JSON.parse(test.challenges);
    challengeArray = Object.values(challengeObject);
  } else {
    challengeArray = Object.values(test.challenges);
  }
  // console.log(JSON.parse(test.challenges));
  // console.log(typeof(test.challenges));
  // const challengeObject = JSON.parse(test.challenges);
  // console.log(test);
  // console.log(test.challenges);
  // console.log(Object.values(test.challenges));
  // const challenge = JSON.parse(test.challenges);
  // console.log(test.challenges.challenge1);
  // console.log(test.challenges[0]);
  // console.log(JSON.parse(test.challenges));
  // const challengeObject = JSON.parse(test.challenges);
  // console.log(challengeObject.challenge1);
  // console.log(JSON.parse(test.challenges));
  // const challengeArray = Object.values(test.challenges);
  // const challengeArray = Object.values(challengeObject);


  return (
    <div>
      <p>ID: {test.id}</p>
      <p>Max Score: {test.max_score}</p>
      <p>Time: {test.time}</p>
      <div className='app-body'>
        {/* {console.log(typeof(challengeArray))}
        {console.log(typeof(challengeObject))} */}
        {challengeArray ? <QuestionBox challenge={challengeArray} clicked={clicked} setClicked={setClicked}/> : 'Loading...'}
      </div>
      <p>Created At: {test.created_at}</p>
      <p>Updated At: {test.updated_at}</p>
    </div>
  );
}

export default Test;
