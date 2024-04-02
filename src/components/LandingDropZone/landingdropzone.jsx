import React, { useState, useRef } from 'react';
import "./landingdropzone.css"

const LandingDropZone = ({ setTestData, setStartTimer }) => {
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

    const response = await fetch('http://localhost:3000/api/v1/tests', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    setTestData(data);
    console.log(JSON.stringify(formData));
    setStartTimer(true);
    setIsLoading(false);
  };


  return (
    <>
      {isLoading ? (
        <p className='loading'></p>
        ) : (
          <div className="landing-dropzone-wrap">
          <div
            className='landing-dropzone-container'
            ref={dropRef}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            >
            <label htmlFor="landing-dropzone-field">Upload Your First Test!</label>
            <input id="landing-dropzone-field" type="file" onChange={(e) => uploadFile(e.target.files[0])} />
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default LandingDropZone;
