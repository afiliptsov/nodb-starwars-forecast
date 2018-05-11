import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import CreateAShip from "./components/CreateAShip/CreateAShip";
import Forecast from "./components/Forecast/Forecast";


class App extends Component {
  render() {
    return (
      <div className="App">
      <CreateAShip />

      </div>
    );
  }
}

export default App;
