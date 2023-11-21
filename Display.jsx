import React from 'react'
import '../styles/App.css';

const Display = ({ num1, num2, operation, result }) => {
  return (
    <div className="display">
      <div className="input">
        {num1} {operation} {num2}
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Display