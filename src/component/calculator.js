
import React, { useState ,  useEffect} from 'react';
import './calculator.css';  

const Calculator = () => {
  const [str, setStr] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setStr(eval(str).toString());
      } catch {
        setStr('Error');
      }
    } else if (value === 'AC') {
      setStr('');
    } else if (value === 'DEL') {
      setStr(str.slice(0, -1));
    } else {
      setStr(str + value);
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    
    if (key === 'Enter') {
      handleClick('=');
    } else if (key === 'Backspace') {
      handleClick('DEL');
    } else if (key === 'Escape') {
      handleClick('AC');
    } else if (['/', '*', '-', '+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
      handleClick(key);
    }
  };


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [str]);



  return (
    <div className="calculator">
      <input
        type="text"
        id="inputbox"
        placeholder="0"
        value={str}
        readOnly
      />
      <div className="row">
        <div className="col-3">
          <button className="button operator" onClick={() => handleClick('AC')}>AC</button>
        </div>
        <div className="col-3">
          <button className="button operator" onClick={() => handleClick('DEL')}>DEL</button>
        </div>
        <div className="col-3">
          <button className="button operator" onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="col-3">
          <button className="button operator" onClick={() => handleClick('%')}>%</button>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <button className="button" onClick={() => handleClick('7')}>7</button>
        </div>
        <div className="col-3">
          <button className="button" onClick={() => handleClick('8')}>8</button>
        </div>
        <div className="col-3">
          <button className="button" onClick={() => handleClick('9')}>9</button>
        </div>
        <div className="col-3">
          <button className="button operator" onClick={() => handleClick('*')}>*</button>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <button className="button" onClick={() => handleClick('4')}>4</button>
        </div>
        <div className="col-3">
          <button className="button" onClick={() => handleClick('5')}>5</button>
        </div>
        <div className="col-3">
          <button className="button" onClick={() => handleClick('6')}>6</button>
        </div>
        <div className="col-3">
          <button className="button operator" onClick={() => handleClick('+')}>+</button>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <button className="button" onClick={() => handleClick('1')}>1</button>
        </div>
        <div className="col-3">
          <button className="button" onClick={() => handleClick('2')}>2</button>
        </div>
        <div className="col-3">
          <button className="button" onClick={() => handleClick('3')}>3</button>
        </div>
        <div className="col-3">
          <button className="button operator" onClick={() => handleClick('-')}>-</button>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <button className="button" onClick={() => handleClick('00')}>00</button>
        </div>
        <div className="col-3">
          <button className="button" onClick={() => handleClick('0')}>0</button>
        </div>
        <div className="col-3">
          <button className="button" onClick={() => handleClick('.')}>.</button>
        </div>
        <div className="col-3">
          <button className="button equalbtn" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
