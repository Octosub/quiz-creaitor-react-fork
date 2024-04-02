import "./App.css";
import React from "react";
import logo from "./assets/qanki-logo.jpg";
import Test from "./components/Test/test";
import Dropzone from "./components/DropZone/dropzone";
import Sidebar from "./components/Sidebar/sidebar";
import { useState } from 'react';


export default function App() {
  const [testData, setTestData] = React.useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [startTimer, setStartTimer] = React.useState(false);

  React.useEffect(() => {
    let timerId;
    if (startTimer && testData && testData.time) {
      // setStartTimer(true);
      setCountdown(testData.time / 1000); // Set countdown value when testData changes
      timerId = setInterval(() => {
        setCountdown(countdown => countdown - 1);
      }, 1000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [startTimer, testData]); // Dependency array includes startTimer and testData

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCountdown((prevCountdown) => {
  //       if (prevCountdown <= 1) {
  //         clearInterval(timerId);
  //         return 0;
  //       } else {
  //         return prevCountdown - 1;
  //       }
  //     });
  //   }, 1000); // Update every second
  //   return () => clearInterval(timerId);
  // }, []); // Add countdown as a dependency

  return (
    <div className='app-frame'>
      {/* {console.log(testData)} */}
      {/*testData == null ? (
        <div className="dropzone">
          <h1>Upload Your First Test!</h1>
          <Dropzone setTestData={setTestData} setStartTimer={setStartTimer} />
        </div>
        ) : (*/}
        <div className='app-body'>
          <div className="sidebar">
            <Sidebar setTestData={setTestData} testData={testData} correctCount={correctCount} countdown={countdown} setStartTimer={setStartTimer}/>
            {/* <button onClick={() => setStartTimer(true)}>Start Timer</button> */}
          </div>
          <div className="test-side">
            <div className="banner">
              <h1 className="title">Quanki</h1>
              <img className="logo" src={logo} alt="logo of qanki" />
            </div>
            <div className="test-container">
              {testData ? <Test test={testData} setCorrectCount={setCorrectCount} /> : 'Loading...'}
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
}
