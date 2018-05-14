import React, { Component } from "react";

import Button from "material-ui/Button";
import "./CreateAShip.css";

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
      shipArray: [],
      edit: false,
      editFlag: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.createAShip = this.createAShip.bind(this);
    this.removeShip = this.removeShip.bind(this);
    this.editShip = this.editShip.bind(this);
  }

  onChangeHandler(e, key) {
    console.log("onChange");
    let shipObj = {};
    shipObj[key] = e.target.value;
    this.setState(shipObj);
    console.log(this.state.shipObj);
  }

  componentDidMount() {
    console.log("HIT");
    axios.get(baseUrl).then(response => {
      this.setState({ shipArray: response.data });
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
    axios.post(baseUrl, { shipObject }).then(response => {
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
    console.log(id);
    axios.delete(baseUrl + `/${id}`).then(response => {
      this.setState({
        shipArray: response.data
      });
    });
  }

  getShip() {
    axios.get("http://localhost:3001/api/ships").then(response => {
      console.log(response);
      this.setState({
        shipArray: response.data[0]
      });
    });
  }
  editShip(id) {
    let shipObject = {
      name: this.state.name,
      maxSpeed: this.state.maxSpeed,
      crew: this.state.crew,
      cargoCapacity: this.state.cargoCapacity
    };
    console.log(id);
    console.log(shipObject);
    axios.put(baseUrl + `/${id}`, { shipObject }).then(response =>
      this.setState({
        shipArray: response.data,
        editFlag: !this.state.editFlag,
        name: "",
        maxSpeed: "",
        crew: "",
        cargoCapacity: ""
      })
    );
  }

  toggleEdit() {
    console.log("WORKED");

    this.setState({
      editFlag: !this.state.editFlag
    });
    console.log(this.state.editFlag);
  }

  render() {
    let mapShipArray = this.state.shipArray.map((element, i) => {
      return (
        <div className="map-result" key={i}>
          <span>Name:</span>
          <p>{element.name}</p>
          <span>Max Speed:</span>
          <p>{element.maxSpeed}</p>
          <span>Crew:</span>
          <p>{element.crew}</p>
          <span>Cargo Capacity:</span>
          <p>{element.cargoCapacity}</p>
          <Button
            size="small"
            variant="raised"
            color="primary"
            onClick={id => this.removeShip(element.id)}
          >
            Remove
          </Button>

          <Button
            size="small"
            variant="raised"
            color="primary"
            onClick={() => this.toggleEdit()}
          >
            Edit
          </Button>
        </div>
      );
    });
    let inputMapShipArray = this.state.shipArray.map((el, id) => {
      return (
        <div className="map-result-1" key={id}>
          <div>
            <p>{el.name}</p>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.onChangeHandler(e, "name")}
            />
          </div>
          <p>{el.maxSpeed}</p>
          <input
            type="text"
            placeholder="Maximum Speed"
            value={this.state.maxSpeed}
            onChange={e => this.onChangeHandler(e, "maxSpeed")}
          />
          <p>{el.crew}</p>
          <input
            type="text"
            placeholder="Crew"
            value={this.state.crew}
            onChange={e => this.onChangeHandler(e, "crew")}
          />
          <p>{el.cargoCapacity}</p>
          <input
            type="text"
            placeholder="Cargo Capacity"
            value={this.state.cargoCapacity}
            onChange={e => this.onChangeHandler(e, "cargoCapacity")}
          />
          <br />
          <Button
            size="small"
            variant="raised"
            color="primary"
            onClick={id => this.removeShip(el.id)}
          >
            Remove
          </Button>
          <Button
            size="small"
            variant="raised"
            color="primary"
            onClick={id => this.editShip(el.id)}
          >
            Save
          </Button>
        </div>
      );
    });
    console.log(this.state);
    return (
      <div className="create-ship-class">
        <div className="map-input">
          <span>Name:</span>
          <input
            value={this.state.name}
            onChange={e => this.onChangeHandler(e, "name")}
          />
          <span>Max Speed:</span>
          <br />
          <input
            value={this.state.maxSpeed}
            onChange={e => this.onChangeHandler(e, "maxSpeed")}
          />
          <span>Crew:</span>
          <input
            value={this.state.crew}
            onChange={e => this.onChangeHandler(e, "crew")}
          />
          <span>Cargo Capacity:</span>
          <input
            value={this.state.cargoCapacity}
            onChange={e => this.onChangeHandler(e, "cargoCapacity")}
          />
          <br />
          <br />
          <Button
            className="red-button"
            size="small"
            variant="raised"
            color="secondary"
            onClick={() => this.createAShip()}
          >
            ORDER
          </Button>
        </div>

        <div className="ship-create-result" />
        {!this.state.editFlag ? mapShipArray : inputMapShipArray}
      </div>
    );
  }
}
