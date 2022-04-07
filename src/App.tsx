/*
 * @Author: zxy
 * @Date: 2022-04-07 16:49:11
 * @LastEditTime: 2022-04-07 18:30:41
 * @FilePath: /ts-with-react/src/App.tsx
 */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Hello msg={'Hello Word 2'}></Hello>
        <LikeButton></LikeButton>
        <button onClick={() => setShow(!show)}>changeShow</button>
        {show && <MouseTracker></MouseTracker>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
