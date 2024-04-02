import React from 'react';
import './finishscreen.css';

const FinishScreen = ({ correctCount, setStartTimer, setCountdown, setCountdownOver }) => {
  const addTwoMinutesAndStart = () => {
    setCountdown(120000); // Add 2 minutes
    setStartTimer(true); // Start the timer
    setCountdownOver(false); // Reset the countdown over state
  };

  return (
    <div>
      <h1>Your Time is Over!</h1>
      <p className='correctCountP'>Your score is: {correctCount * 10}</p>
      <button onClick={addTwoMinutesAndStart}>Add 2 more minutes</button>
    </div>
  );
};

export default FinishScreen;
