import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CreateAShip from "./components/CreateAShip/CreateAShip";
import Forecast from "./components/Forecast/Forecast";

class App extends Component {
  constructor() {
    super();
    this.state = {
      createAShipEnabled: false,
      forecastEnabled: false,
      buttonsVisibility: true
    };
    this.enableShipMenu = this.enableShipMenu.bind(this);
    this.enableForecastMenu = this.enableForecastMenu.bind(this);
  }
  enableShipMenu() {
    return this.setState({
      createAShipEnabled: !this.state.createAShipEnabled,
      buttonsVisibility: !this.state.buttonsVisibility
    });
  }
  enableForecastMenu() {
    return this.setState({
      forecastEnabled: !this.state.forecastEnabled,
      buttonsVisibility: !this.state.buttonsVisibility
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.buttonsVisibility ? (
          <button onClick={this.enableShipMenu}>Spaceship Lab</button>
        ) : null}
        {this.state.createAShipEnabled ? <CreateAShip /> : null}

        {this.state.buttonsVisibility ? (
          <button onClick={this.enableForecastMenu}>Forecast</button>
        ) : null}
        {this.state.forecastEnabled ? <Forecast /> : null}
      </div>
    );
  }
}

export default App;
