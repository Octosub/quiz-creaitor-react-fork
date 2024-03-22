// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/tests
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Test from "./components/Test/test";
import Dropzone from "./components/DropZone/dropzone";

export default function App() {
  // const [tests, setTests] = React.useState([]);
  const [test, setTest] = React.useState(null);

  React.useEffect(() => {
    const url = "http://localhost:3000/api/v1/tests/25";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setTest(data);
    });
  }, []);

  return (
    <div className='app-frame'>
      <Navbar />
      <Dropzone />
      <div className='app-body'>
        {console.log(typeof(test))}
        {test ? <Test test={test}/> : 'Loading...'}
      </div>
    </div>
  );
}
