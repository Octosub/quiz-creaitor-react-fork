import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Test from "./components/Test/test";
import Dropzone from "./components/DropZone/dropzone";
import Form from "./components/Form/form";
// import { useState } from 'react';

export default function App() {
  const [testData, setTestData] = React.useState(null);
  // const [clicked, setClicked] = useState(false);

  React.useEffect(() => {
    const url = "http://localhost:3000/api/v1/tests/25";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setTestData(data);
    });
  }, []);

  return (
    <div className='app-frame'>
      <Navbar />
      <Dropzone />
      <Form setTestData={setTestData} />
      {/* <Form setTestData={setTestData} setClicked={setClicked} /> */}
      <div className='app-body'>
        {console.log(testData)}
        {testData ? <Test test={testData} /> : 'Loading...'}
        {/* {testData ? <Test test={testData} clicked={clicked} setClicked={setClicked}/> : 'Loading...'} */}
      </div>
    </div>
  );
}
