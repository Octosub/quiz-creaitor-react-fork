import React, { useState } from 'react';

const DropZone = () => {
  const [selectedFile, setSelectedFile] = useState(null);


  const uploadFile = (event) => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };

    const formData = new FormData();

    // Add the document file
    // Replace 'document.pdf' with the actual file object you want to send
    formData.append('file', handleFileChange);

    fetch('http://localhost:3000/api/v1/tests', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
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
