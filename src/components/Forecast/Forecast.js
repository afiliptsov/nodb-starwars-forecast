import React, { Component } from "react";
import axios from "axios";

const starWarsURL = "https://swapi.co/api/vehicles/";
const baseWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&APPID=0a24ad14057cb763cfd0d01dab910c06";
const weatherDallas =
  "http://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=0a24ad14057cb763cfd0d01dab910c06";
const weatherSanFrancisco =
  "http://api.openweathermap.org/data/2.5/weather?q=San Francisco&APPID=0a24ad14057cb763cfd0d01dab910c06";
const weatherLondon =
  "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=0a24ad14057cb763cfd0d01dab910c06";

export default class Forecast extends Component {
  constructor() {
    super();
    this.state = {
      shipArr: [],
      weatherDallas: "",
      weatherSanFrancisco: "",
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
    if ((this.state.weather = "Clouds")) {
      this.setState({
        prediction: "WE ALL GONNA DIE"
      });
    }
  }

  render() {
    let mapShipArr = this.state.shipArr.map((element, i) => {
      return (
        <div key={i}>
          <p>{element.name}</p>
          <p>{element.max_atmosphering_speed}</p>
          <p>{element.crew}</p>
          <p>{element.cargo_capacity}</p>
          <button>Choose Ship</button>
        </div>
      );
    });

    return (
      <div>
        <input type="text" onChange={e => this.onChangeWeatherHandler(e)} />
        {console.log(this.state.city)}
        <button onClick={this.submitWeatherRequest}>Check Weather</button>
        {console.log(this.state.weather)}
        <div>{mapShipArr}</div>

        <div>
          <button onClick={this.makeWeatherForecast}>Check Result</button>
          <p>{this.state.prediction}</p>
        </div>
        {console.log(this.state.prediction)}
      </div>
    );
  }
}
