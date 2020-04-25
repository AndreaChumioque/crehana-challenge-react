import React from 'react';
import JobList from './components/JobList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="App">
      <JobList />
      {/* <header className="App-header">
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
        </a>
      </header> */}
    </main>
  );
}

export default App;
