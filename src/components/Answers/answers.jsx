// import React from 'react';

function Answers({ choices }) {
  const handleAnswerClick = (answer) => {
    // Handle the click event for the answer here
    console.log(`Clicked answer: ${answer}`);
  };

  return (
    <div className='app-body'>
      <button onClick={() => handleAnswerClick(choices.choice1)}>
        a: {choices.choice1}
      </button>
      <button onClick={() => handleAnswerClick(choices.choice2)}>
        b: {choices.choice2}
      </button>
      <button onClick={() => handleAnswerClick(choices.choice3)}>
        c: {choices.choice3}
      </button>
    </div>
  );
}

export default Answers;
