import React from 'react';

function Answers({test}) {
  return (
      <div className='app-body'>
        <p>a: {test.challenges.challenge1.choices.a}</p>
        <p>b: {test.challenges.challenge1.choices.b}</p>
        <p>c: {test.challenges.challenge1.choices.c}</p>
      </div>
  );
}

export default Answers;
