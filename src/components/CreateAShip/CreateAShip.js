import React, { Component } from "react";

import axios from "axios";
const baseUrl = "http://localhost:3001/api/ships";

export default class CreateAShip extends Component {
  constructor() {
    super();
    this.state = {
      shipObj: {},
      name: "",
      maxSpeed: "",
      crew: "",
      cargoCapacity: "",
      shipArray: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.createAShip = this.createAShip.bind(this);
  }

  onChangeHandler(e, key) {
    // console.log(this.state.shipArray);
    // let shipArrayCopy = this.state.shipArray.slice();
    // console.log(shipArrayCopy);
    // shipArrayCopy[key] = e.target.value;
    let shipObj = {};
    shipObj[key] = e.target.value;
    this.setState(shipObj);
  }

  componentDidMount() {
    console.log("HIT");
    axios.get("http://localhost:3001/api/ships").then(response => {
      this.setState({
        shipArray: response.data
      });
    });
    console.log("COMPONENT MOUNT");
  }
  createAShip() {
    // const { shipArray } = this.state;
    let shipObject = {
      name: this.state.name,
      maxSpeed: this.state.maxSpeed,
      crew: this.state.crew,
      cargoCapacity: this.state.cargoCapacity
    };
    axios
      .post("http://localhost:3001/api/ships", { shipObject })
      .then(response => {
        console.log(response);
        this.setState({
          shipArray: response.data,
          name: "",
          crew: "",
          cargoCapacity: "",
          maxSpeed: ""
        });
      });
  }

  removeShip(id) {
    axios.delete();
  }

  getShip() {
    axios.get("http://localhost:3001/api/ships").then(response => {
      console.log(response);
      this.setState({
        shipArray: response.data[0]
      });
    });
  }

  render() {
    let mapShipArray = this.state.shipArray.map((element, i) => {
      return (
        <div key={i}>
          <p>{element.name}</p>
          <p>{element.maxSpeed}</p>
          <p>{element.crew}</p>
          <p>{element.cargoCapacity}</p>
        </div>
      );
    });
    console.log(this.state);
    return (
      <div className="create-ship-class">
        <div className="ship-input-box">
          <button onClick={() => this.createAShip()} />
          <label>{this.state.name}</label>
          <input
            value={this.state.name}
            onChange={e => this.onChangeHandler(e, "name")}
          />
          <input
            value={this.state.maxSpeed}
            onChange={e => this.onChangeHandler(e, "maxSpeed")}
          />
          <input
            value={this.state.crew}
            onChange={e => this.onChangeHandler(e, "crew")}
          />
          <input
            value={this.state.cargoCapacity}
            onChange={e => this.onChangeHandler(e, "cargoCapacity")}
          />
        </div>

        <div className="ship-create-result" />
        {mapShipArray}
      </div>
    );
  }
}
