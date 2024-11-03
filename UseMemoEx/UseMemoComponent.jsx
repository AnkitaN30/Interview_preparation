import {useState,useMemo } from 'react';

const UseMemoComponent = ()=> {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [inputValue, setInputValue] = useState('');
  
    // Memoized sum calculation
    const sum = useMemo(() => {
      console.log('Calculating sum...');
      return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]); // Recalculate only when 'numbers' changes
  
    const addNumber = () => {
      const num = parseInt(inputValue);
      if (!isNaN(num)) {
        setNumbers((prev) => [...prev, num]);
        setInputValue(''); // Clear input
      }
    };
  
    return (
      <div>
        <h1>Sum: {sum}</h1>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addNumber}>Add Number</button>
        <h2>Current Numbers: {numbers.join(', ')}</h2>
      </div>
    );
  }

export default UseMemoComponent;