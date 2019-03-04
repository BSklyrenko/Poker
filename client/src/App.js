import React, { Component } from "react";
import io from "socket.io-client";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // const socket = io();
    const socket = io("http://localhost:7777");
    socket.on("frame", data => {
      console.log(data, 1234);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
}

export default App;