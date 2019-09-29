import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://api.github.com/users/chiaradiaz1991');
      const dataJson = await data.json();
      setData(dataJson)
    }
    if (!data.name && !data.bio) {
      fetchData();
    }
    console.log('render/Render')
  })

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Sum!</button>
      <button onClick={() => setCount(count - 1)}>Subtraction!</button>
      <button onClick={() => setCount(0)}>Reinitialize!</button>
      <h1>{count}</h1>
      Name: <h1>{data.name}</h1>
    </div>
  );
}

export default App;
