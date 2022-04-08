/*
 * @Author: zxy
 * @Date: 2022-04-07 16:49:11
 * @LastEditTime: 2022-04-08 19:54:42
 * @FilePath: /ts-with-react/src/App.tsx
 */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePos from './hooks/useMousePos';
import useURLLoader from './hooks/useURLLoader';

interface IShowRes {
  message: string,
  status: string
}

function App() {
  const [show, setShow] = useState(true)
  const pos = useMousePos()
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogRes = data as IShowRes

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        {loading ? <p>🐶 loading</p> : <img src={dogRes && dogRes.message} alt="dog"></img>}
        <Hello msg={'Hello Word 2'}></Hello>
        <p>X: {pos.x}, Y: {pos.y}</p>
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
