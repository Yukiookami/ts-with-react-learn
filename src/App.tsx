/*
 * @Author: zxy
 * @Date: 2022-04-07 16:49:11
 * @LastEditTime: 2022-04-07 17:14:47
 * @FilePath: /ts-with-react/src/App.tsx
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Hello msg={'Hello Word 2'}></Hello>
        <LikeButton></LikeButton>
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
