import React from 'react';
import './finishscreen.css';

const FinishScreen = ({ correctCount, setStartTimer, setCountdown, setCountdownOver, testData }) => {
  const addTwoMinutesAndStart = () => {
    setCountdown(120000); // Add 2 minutes
    setStartTimer(true); // Start the timer
    setCountdownOver(false); // Reset the countdown over state
  };

  return (
    <div className='container-left'>
      <div className="background-finish">
        <h1>Time&#39;s up!</h1>
        <p className='correctCountP'>Score: {correctCount * 10}/{testData.max_score}</p>
        <button onClick={addTwoMinutesAndStart}>Add 2 more minutes</button>
      </div>
    </div>
  );
};

export default FinishScreen;
