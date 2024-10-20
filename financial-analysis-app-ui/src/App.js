import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadPage from './UploadPage';
import ResultsPage from './ResultsPage';
import './App.css'; // Import CSS for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Financial Analysis Tool</h1>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;