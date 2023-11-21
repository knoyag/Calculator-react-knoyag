import React, { useState } from 'react';
import Buttons from './Buttons';
import Display from './Display';


const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState(undefined);

  const handleNumberClick = (value) => {
    if (!operation) {
      setNum1((prevNum1) => prevNum1 + value);
    } else {
      setNum2((prevNum2) => prevNum2 + value);
    }
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setNum1(num2);
    setNum2('');
  };

  const handleEqualsClick = () => {
    const firstNum = parseFloat(num1);
    const secondNum = parseFloat(num2);

    if (isNaN(firstNum) || isNaN(secondNum)) return;

    let result;
    switch (operation) {
      case '+':
        result = firstNum + secondNum;
        break;
      case '-':
        result = firstNum - secondNum;
        break;
      case '*':
        result = firstNum * secondNum;
        break;
      case '÷':
        result = firstNum / secondNum;
        break;
      default:
        return;
    }

    setNum2(result.toString());
    setOperation(undefined);
    setNum1('');
  };

  const handleDeleteClick = () => {
    setNum2((prev) => prev.toString().slice(0, -1));
  };

  const handleAllClearClick = () => {
    setNum1('');
    setNum2('');
    setOperation(undefined);
  }

  const handleDotClick = () => {
    if (!num2.includes('.')) {
      setNum2((prev) => prev.toString() + '.');
    }
  };

  return (
    <div className="calculator">
      <Display num1={num1} num2={num2} />
      <Buttons
        handleNumberClick={handleNumberClick}
        handleOperationClick={handleOperationClick}
        handleEqualClick={handleEqualsClick}
        handleAllClearClick={handleAllClearClick}
        handleDeleteClick={handleDeleteClick}
        handleDotClick={handleDotClick} />
    </div>
  );

  };

export default Calculator