import "./App.css";
import React from "react";
import logo from "./assets/qanki-logo.jpg";
import Test from "./components/Test/test";
// import Dropzone from "./components/DropZone/dropzone";
import Sidebar from "./components/Sidebar/sidebar";
import { useState, useEffect } from 'react';


export default function App() {
  const [testData, setTestData] = React.useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [countdown, setCountdown] = useState(null);

  // React.useEffect(() => {
  //   const url = "http://localhost:3000/api/v1/tests/77";
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     setTestData(data);
  //     setCountdown(data.time / 1000); // Set initial countdown value when testData is fetched
  //   });
  // }, []);
  React.useEffect(() => {
    setTestData(null);
    setCountdown(null); // Set initial countdown value
  }, []);

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

  return (
    <div className='app-frame'>
      <div className='app-body'>
        <div className="sidebar">
          <Sidebar setTestData={setTestData} testData={testData} correctCount={correctCount} countdown={countdown}/>
        </div>
        <div className="test-side">
          <div className="banner">
            <h1 className="title">Quanki</h1>
            <img className="logo" src={logo} alt="logo of qanki" />
          </div>
          {/* {console.log(testData)} */}
          {testData == null ? (
            <div className="dropzone">
              <h1>Upload Your First Test!</h1>
            </div>
          ) : (
            <div className="test-container">
              {testData ? <Test test={testData} setCorrectCount={setCorrectCount} /> : 'Loading...'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
