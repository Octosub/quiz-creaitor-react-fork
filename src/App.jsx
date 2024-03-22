import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Test from "./components/Test/test";
import Form from "./components/Form/form";
import { useState } from 'react';

export default function App() {

  // const [tests, setTests] = React.useState([]);
  // const [test, setTest] = React.useState(null);
  // const [formData, setFormData] = React.useState(null); // New state for form data
  // const [data, setData] = React.useState(null); // New state for form data
  const [testData, setTestData] = React.useState(null); // New state for test data
  const [clicked, setClicked] = useState(false);

  React.useEffect(() => {
    const url = "http://localhost:3000/api/v1/tests/9";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setTestData(data);
      // setData(data);
    });
    // console.log(data);
  }, []);

  // const handleFormSubmit = (data) => {
  //   setFormData(data); // Update form data state when form is submitted
  // };

  return (
    <div className='app-frame'>
      <Navbar />
      <Form setTestData={setTestData} setClicked={setClicked} />
      <div className='app-body'>
        {/* {console.log(typeof(test))} */}
        {console.log(testData)}
        {testData ? <Test test={testData} clicked={clicked} setClicked={setClicked}/> : 'Loading...'}
      </div>
    </div>
  );
}
