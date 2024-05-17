import React, { useState, useEffect } from 'react';
import './App.css';

function ShortcutBar() {
  return <div>hello<br/>test</div>
}

function App() {
  const [currTime, setCurrTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
          <ShortcutBar/>
      </header>
    </div>
  );
}

export default App;
