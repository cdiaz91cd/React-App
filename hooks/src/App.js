import React , { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount ] = useState(0);
  return (
    <div className="App">
      <button onClick={()=> setCount(count + 1) }>Sum!</button>
      <button onClick={()=> setCount(count - 1) }>Subtraction!</button>
      <button onClick={()=> setCount(0) }>Reinitialize!</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
