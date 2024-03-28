import React, { useState, useEffect } from 'react';

export default function Testprogress({ testData }) {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (testData) {
      setCountdown(testData.time / 1000);
    }
  }, [testData]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          // Clear interval if countdown is 0 or less
          clearInterval(timerId);
          return 0;
        } else {
          // Otherwise, decrease countdown
          return prevCountdown - 1;
        }
      });
    }, 1000); // Update every second
    return () => clearInterval(timerId);
  }, []);


  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <>
      {/* {console.log(testData.time)} */}
      <div className="sidebar">
        <div className='score'>
          {/* <h5>Your current score: {correctCount * 10}</h5> */}
        </div>
        <div className='test'>
          <>
            {testData && <p>Max Score: {testData.max_score}</p>}
            <p>Time: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
          </>
          <div className='challenges'>
          </div>
        </div>
      </div>
    </>
  );
};
