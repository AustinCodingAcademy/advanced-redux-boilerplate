import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterContainer />
      </div>

    </div>
  );
}

export default App;
