import "./App.css";
import React from "react";
import logo from "./assets/quanki-logo.png";
import Test from "./components/Test/test";
import LandingDropZone from "./components/LandingDropZone/landingdropzone";
import Sidebar from "./components/Sidebar/sidebar";
import FinishScreen from "./components/FinishScreen/finishscreen";
import { useState } from 'react';


export default function App() {
  const [testData, setTestData] = React.useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [startTimer, setStartTimer] = React.useState(false);
  const [coundownOver, setCountdownOver] = React.useState(false);

  // React.useEffect(() => {
  //   const url = "http://localhost:3000/api/v1/tests/136";
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       setTestData(data);
  //       setStartTimer(true);
  //     });
  // }, []);

  React.useEffect(() => {
    let timerId;
    if (startTimer && testData && testData.time) {
      // setStartTimer(true);
      setCountdown((countdown ?? testData.time) / 1000);      timerId = setInterval(() => {
        setCountdown(countdown => countdown - 1);
      }, 1000);
    }


    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [startTimer, testData]); // Dependency array includes startTimer and testData


  React.useEffect(() => {
    if (countdown === 0 || countdown < 0) {
      setCountdownOver(true);
      setStartTimer(false);
      console.log('Timer has finished');
    }
  }, [countdown]); // Dependency array includes countdown

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
    <>
        <div className={testData ? "banner" : "banner landing-banner"}>
          <h1 className="title">Quanki</h1>
          <img className="logo" src={logo} alt="logo of quanki" />
        </div>
        <div className='app-frame'>
        {/* {console.log(testData)} */}
        {testData == null ? (
          <div className="dropzone">
            <LandingDropZone setTestData={setTestData} setStartTimer={setStartTimer} />
          </div>
        ) : (
          <>
            <div className='app-body'>
              <div className="sidebar">
                <Sidebar setTestData={setTestData} testData={testData} correctCount={correctCount} countdown={countdown} setStartTimer={setStartTimer}/>
                {/* <button onClick={() => setStartTimer(true)}>Start Timer</button> */}
              </div>
              <div className="test-side">
                <div className="test-container">
                  {testData ? <Test test={testData} setCorrectCount={setCorrectCount} /> : 'Loading...'}
                  {coundownOver == true ? <div className="finish-screen"><FinishScreen correctCount={correctCount} setStartTimer={setStartTimer} setCountdown={setCountdown} setCountdownOver={setCountdownOver}/></div> : null}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
