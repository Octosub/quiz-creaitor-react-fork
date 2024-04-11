import React, { useState, useRef } from 'react';
import "./dropzone.css";

const DropZone = ({ setTestData, setStartTimer, setCountdown, setCountdownOver, setShowDropzone, setIsUploadClicked, setIsShowClicked }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState(3);

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

  const handleSliderChange = (e) => {
    setNumberOfQuestions(e.target.value);
  };

  const uploadFile = async (file) => {
    setIsLoading(true);
    setSelectedFile(file);

    const formData = new FormData();

    formData.append('file', file);
    formData.append('number', numberOfQuestions);

    const response = await fetch('https://quanki-bb66635c0450.herokuapp.com/api/v1/tests', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setTestData(data);
    setIsLoading(false);
    setCountdownOver(false);
    setCountdown(data.time);
    setStartTimer(true);
    setShowDropzone(false);
    setIsUploadClicked(false);
    setIsShowClicked(true);
  };

  return (
    <>
      {isLoading ? (
        <p className='loading'></p>
      ) : (
      <>
      <div className="slider-container">
        <input className='slider' type="range" min="0" max="10" value={numberOfQuestions} onChange={handleSliderChange} />
        <p>Number of Questions: {numberOfQuestions}</p>
      </div>
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
      </div></>
      )}
    </>
  );
};

export default DropZone;
