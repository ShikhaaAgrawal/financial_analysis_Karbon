import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultsPage.css'; // Import CSS for styling

function ResultsPage() {
  const location = useLocation();
  const { data } = location.state || { data: {} };

  return (
    <div className="results-container">
      <h2>Results</h2>
      <div className="result-item">
        <strong>Rule 1 (Total Revenue Flag):</strong> {data.TOTAL_REVENUE_5CR_FLAG}
      </div>
      <div className="result-item">
        <strong>Rule 2 (Borrowing to Revenue Flag):</strong> {data.BORROWING_TO_REVENUE_FLAG}
      </div>
      <div className="result-item">
        <strong>Rule 3 (ISCR Flag):</strong> {data.ISCR_FLAG}
      </div>
      <button onClick={() => window.location.href = '/'}>Upload Another File</button>
    </div>
  );
}

export default ResultsPage;
