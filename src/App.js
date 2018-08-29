import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App wrapper-prim">
        <div className="wrapper-sec">
          <header className="header">
            <h1 className="header-main">Training in Rhythm</h1>
            {/* import image to replace the logo */}
            <img src={logo} className="image-main" alt="logo" />
          </header>
          <div className="button-container">
            <button className="create-log-button button">Create New Log</button>
            <button className="past-logs-button button">Past Logs</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
