import React, { useState, useRef } from 'react';
import "./dropzone.css";

const DropZone = ({ setTestData, setStartTimer, setCountdown, setCountdownOver }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dropRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      uploadFile(files[0]);
    }
  };

  const uploadFile = async (file) => {
    setIsLoading(true);
    setSelectedFile(file);

    const formData = new FormData();

    formData.append('file', file);
    formData.append('number', 4);

    const response = await fetch('http://localhost:3000/api/v1/tests', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setTestData(data);
    // console.log(JSON.stringify(formData));
    console.log(data.time);
    // console.log(setTestData);
    console.log("AAAAA");
    console.log(formData);
    console.log("BBBBB");
    setIsLoading(false);
    setCountdownOver(false);
    setCountdown(data.time);
    setStartTimer(true);
  };

  return (
    <>
      {isLoading ? (
        <p className='loading'></p>
      ) : (
      <div className="dropzone-wrap">
        <p className='droptext'>Drop your File here</p>
        <div
          className='dropzone-container'
          ref={dropRef}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          >
          <input type="file" onChange={(e) => uploadFile(e.target.files[0])} />
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
      </div>
      )}
    </>
  );
};

export default DropZone;
