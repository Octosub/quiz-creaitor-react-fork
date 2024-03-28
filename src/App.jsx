import "./App.css";
import React from "react";
// import Navbar from "./components/Navbar";
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
      <div className='banner'>
      </div>
      <div className='app-body'>
        <div className="sidebar">
          <Sidebar setTestData={setTestData} testData={testData}/>
        </div>
        {console.log(testData)}
        <div className="test-container">
          {testData ? <Test test={testData} /> : 'Loading...'}
        </div>
      </div>
    </div>
  );
}
