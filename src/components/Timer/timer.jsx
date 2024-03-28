import React, { useEffect } from 'react';
export default function Timer({ time, countdown, setCountdown }) {

  // useEffect(() => {
  //   if (time) {
  //     setCountdown(time / 1000);
  //   }
  // }, [time]);

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
  }, []); // Add countdown as a dependency

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <>
      <div>
        <p>Time: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
      </div>
    </>
    );
  }
