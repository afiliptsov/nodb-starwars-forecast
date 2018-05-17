import React, { Component } from "react";
import axios from "axios";
import "./Forecast.css";
import Button from "material-ui/Button";
import HomeButton from "../HomeButton/HomeButton";

const starWarsURL = "https://swapi.co/api/vehicles/";
const baseWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipArr: [],
      city: "",
      weather: "",
      prediction: ""
    };
    this.onChangeWeatherHandler = this.onChangeWeatherHandler.bind(this);
    this.submitWeatherRequest = this.submitWeatherRequest.bind(this);
    this.makeWeatherForecast = this.makeWeatherForecast.bind(this);
  }

  componentDidMount() {
    console.log("HIT");

    axios.get(starWarsURL).then(response => {
      this.setState({ shipArr: response.data.results });
    });

    console.log("COMPONENT MOUNT");
  }

  onChangeWeatherHandler(e) {
    this.setState({
      city: e.target.value
    });
  }

  submitWeatherRequest() {
    axios.get(baseWeatherUrl + `${this.state.city}` + apiKey).then(response => {
      this.setState({ weather: response.data.weather[0].main });
    });
  }

  makeWeatherForecast() {
    this.setState({ prediction: this.state.weather });
  }

  render() {
    let mapShipArr = this.state.shipArr.map((element, i) => {
      return (
        <div key={i} className="ship-card">
          <span>Name:</span>
          <p>{element.name}</p>
          <span>Max Speed:</span>
          <p>{element.max_atmosphering_speed}</p>
          <span>Crew:</span>
          <p>{element.crew}</p>
          <span>Cargo Capacity:</span>
          <p>{element.cargo_capacity}</p>
          <Button size="small" variant="raised" color="primary">
            Choose
          </Button>
        </div>
      );
    });

    return (
      <div>
        <HomeButton moveToHome={this.props.moveToHome} />
        <div className="weather-input-submit-field">
          <div>
            <input
              class="weather-input"
              type="text"
              onChange={e => this.onChangeWeatherHandler(e)}
            />
          </div>
          {console.log(this.state.city)}
          <div class="submit-weather-button">
            <Button
              size="small"
              variant="raised"
              color="primary"
              onClick={this.submitWeatherRequest}
            >
              Submit city
            </Button>
          </div>
        </div>

        {console.log(this.state.weather)}
        <div class="check-weather-result-button">
          <span className="check-weather-output">{this.state.prediction}</span>
          <Button
            size="small"
            variant="raised"
            color="primary"
            onClick={this.makeWeatherForecast}
          >
            Check Result
          </Button>
        </div>

        <div id="render-ships">
          <div className="ships-container">{mapShipArr}</div>
          {console.log(this.state.prediction)}
        </div>
      </div>
    );
  }
}
