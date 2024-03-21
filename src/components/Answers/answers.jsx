import React from 'react';

function Answers({ test }) {
  const handleAnswerClick = (answer) => {
    // Handle the click event for the answer here
    console.log(`Clicked answer: ${answer}`);
  };

  return (
    <div className='app-body'>
      <button onClick={() => handleAnswerClick(test.challenges.challenge1.choices.a)}>
        a: {test.challenges.challenge1.choices.a}
      </button>
      <button onClick={() => handleAnswerClick(test.challenges.challenge1.choices.b)}>
        b: {test.challenges.challenge1.choices.b}
      </button>
      <button onClick={() => handleAnswerClick(test.challenges.challenge1.choices.c)}>
        c: {test.challenges.challenge1.choices.c}
      </button>
    </div>
  );
}

export default Answers;
