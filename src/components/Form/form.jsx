import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({ content: ''});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/tests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="content"
        value={formData.name}
        onChange={handleChange}
        placeholder="Content"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
