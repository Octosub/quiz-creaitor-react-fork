import React, { useState } from 'react';

const DropZone = ({ setTestData }) => {
  const [selectedFile, setSelectedFile] = useState(null);


  const uploadFile = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);


    const formData = new FormData();

    formData.append('file', file);

    const response = await fetch('http://localhost:3000/api/v1/tests', {
      method: 'POST',
      body: formData
    })
    const data = await response.json();
    setTestData(data);
    console.log(JSON.stringify(formData));
  }

  return (
    <div>
      <input type="file" onChange={uploadFile} />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default DropZone;
