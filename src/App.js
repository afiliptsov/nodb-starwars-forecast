import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CreateAShip from "./components/CreateAShip/CreateAShip";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";

import Button from "material-ui/Button";
import Icon from "material-ui/Icon";

import Typist from "react-typist";

class App extends Component {
  constructor() {
    super();
    this.state = {
      createAShipEnabled: false,
      forecastEnabled: false,
      buttonsVisibility: true,
      introVisibility: true
    };
    this.enableShipMenu = this.enableShipMenu.bind(this);
    this.enableForecastMenu = this.enableForecastMenu.bind(this);
  }
  enableShipMenu() {
    return this.setState({
      createAShipEnabled: !this.state.createAShipEnabled,
      buttonsVisibility: !this.state.buttonsVisibility,
      introVisibility: !this.state.introVisibility
    });
  }
  enableForecastMenu() {
    return this.setState({
      forecastEnabled: !this.state.forecastEnabled,
      buttonsVisibility: !this.state.buttonsVisibility,
      introVisibility: !this.state.introVisibility
    });
  }

  render() {
    return (
      <div class="control-panel">
        <div className="typist-div">
          {this.state.buttonsVisibility ? (
            <Typist className="typist-middle-text">
              <Typist.Delay ms={1000} />
              Welcome Commander...
              <Typist.Backspace count={20} delay={400} />
              This is your Control Panel
              <Typist.Backspace count={26} delay={400} />
              You can check Weather Forecast
              <Typist.Backspace count={31} delay={400} />
              Or enter your Spaceship Lab
              <Typist.Backspace count={28} delay={400} />
              Good Luck..........
            </Typist>
          ) : null}
        </div>

        <div className="main-element">
          <div className="left-button">
            {this.state.buttonsVisibility ? (
              <Button
                style={{ fontSize: "30px", width: "300px" }}
                variant="raised"
                color="primary"
                onClick={this.enableForecastMenu}
              >
                Forecast
              </Button>
            ) : null}
            {this.state.forecastEnabled ? <Forecast /> : null}
          </div>

          <div className="right-button">
            {this.state.buttonsVisibility ? (
              <Button
                style={{ fontSize: "30px", width: "300px" }}
                variant="raised"
                color="primary"
                onClick={this.enableShipMenu}
              >
                Spaceship Lab
              </Button>
            ) : null}
            {this.state.createAShipEnabled ? <CreateAShip /> : null}
          </div>
        </div>
        <p />
      </div>
    );
  }
}

export default App;
