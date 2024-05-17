import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from "./components/Posts";
import Navbar from "./components/BlogNav"

function ShortcutBar() {
  return <div>hello<br/>test</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <Posts/>
          <ShortcutBar/>
      </header>
    </div>
  );
}

export default App;
