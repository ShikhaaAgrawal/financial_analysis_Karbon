import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadPage.css'; // Import CSS for styling

function UploadPage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError(''); // Reset error on file selection
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/results', { state: { data: data.flags } });
      } else {
        setError('Failed to upload file: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      setError('Error occurred while uploading file: ' + error.message);
    }
  };

  return (
    <div className="upload-container">
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".json" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default UploadPage;
