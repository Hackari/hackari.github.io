import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/BlogNav";
import Posts from "./components/Posts";
function ShortcutBar() {
  return <div>hello<br/>test</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <ShortcutBar/>
          <Posts/>
      </header>
    </div>
  );
}

export default App;
