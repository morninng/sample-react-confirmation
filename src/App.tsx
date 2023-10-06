import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './counter/Counter'
import {Parent} from './form/parent'
import {Parent2} from './form2/parent2'
import {CssModuleButton} from './style-test/css-module/'
import {MakeStyleButton} from './style-test/make-style/'
import {StyledComponentButton} from './style-test/styled-component/'
import {ParentAAAAA} from './immutable/parent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* hhh
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* <div>
        sss
        <Counter />
        <br />
        <br />
        <br />
        <Parent />

        <br />
        <br />
        <br />


        <Parent2 />
      </div>
      <div>
        <CssModuleButton />
      </div>
      <div>
        <MakeStyleButton />
      </div>
      <StyledComponentButton /> */}
      <ParentAAAAA />
    </div>
  );
}

export default App;
