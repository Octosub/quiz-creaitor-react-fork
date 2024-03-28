import "./App.css";
import React from "react";
import logo from "./assets/qanki-logo.jpg";
import Test from "./components/Test/test";
// import Dropzone from "./components/DropZone/dropzone";
import Sidebar from "./components/Sidebar/sidebar";

export default function App() {
  const [testData, setTestData] = React.useState(null);

  React.useEffect(() => {
    const url = "http://localhost:3000/api/v1/tests/77";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setTestData(data);
    });
  }, []);

  return (
    <div className='app-frame'>
      <div className='app-body'>
        <div className="sidebar">
          <Sidebar setTestData={setTestData} testData={testData}/>
        </div>
        <div className="banner">
          <h1 className="title">Qanki</h1>
          <img className="logo" src={logo} alt="logo of qanki" />
        </div>
        {console.log(testData)}
        <div className="test-container">
          {testData ? <Test test={testData} /> : 'Loading...'}
        </div>
      </div>
    </div>
  );
}
