import React from 'react'
import '../styles/App.css';


const Buttons = ({ handleNumberClick, handleOperationClick, handleEqualClick, handleClearClick, handleAllClearClick }) => {
    return (
      <div className="buttons">
        <button onClick={() => handleNumberClick(1)} className="data-numbers">1</button>
        <button onClick={() => handleNumberClick(2)} className="data-numbers">2</button>
        <button onClick={() => handleNumberClick(3)} className="data-numbers">3</button>
        <button onClick={() => handleNumberClick(4)} className="data-numbers">4</button>
        <button onClick={() => handleNumberClick(5)} className="data-numbers">5</button>
        <button onClick={() => handleNumberClick(6)} className="data-numbers">6</button>
        <button onClick={() => handleNumberClick(7)} className="data-numbers">7</button>
        <button onClick={() => handleNumberClick(8)} className="data-numbers">8</button>
        <button onClick={() => handleNumberClick(9)} className="data-numbers">9</button>
        <button onClick={() => handleNumberClick(0)} className="data-numbers">0</button>
        <button onClick={() => handleOperationClick('+')} className="operation">+</button>
        <button onClick={() => handleOperationClick('-')} className="operation">-</button>
        <button onClick={() => handleOperationClick('*')} className="operation">*</button>
        <button onClick={() => handleOperationClick('/')} className="operation">/</button>
        <button onClick={handleEqualClick} className="operation">=</button>
        <button onClick={handleClearClick} className="clearButton">C</button>
        <button onClick={handleAllClearClick} className="allClearButton">AC</button>

      </div>
    );
  };
  
export default Buttons