import React, { useState } from 'react';

const DropZone = () => {
  const [selectedFile, setSelectedFile] = useState(null);


  const uploadFile = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);


    const formData = new FormData();

    formData.append('file', file);

    fetch('http://localhost:3000/api/v1/tests', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success: uploading file', result);
    })
    .catch(error => {
      console.error('Error: uploading file', error);
    });
  }

  return (
    <div>
      <input type="file" onChange={uploadFile} />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default DropZone;
