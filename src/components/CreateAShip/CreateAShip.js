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
      shipArray: [],
      edit: false,
      editFlag: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.createAShip = this.createAShip.bind(this);
    this.removeShip = this.removeShip.bind(this);
    this.editShip = this.editShip.bind(this);
  }

  //EDIT IS NOT FINISHED!!!!!!
  //EDIT IS NOT FINISHED!!!!!!
  //EDIT IS NOT FINISHED!!!!!!
  //EDIT IS NOT FINISHED!!!!!!
  //EDIT IS NOT FINISHED!!!!!!
  //EDIT IS NOT FINISHED!!!!!!
  //EDIT IS NOT FINISHED!!!!!!
  //EDIT IS NOT FINISHED!!!!!!

  onChangeHandler(e, key) {
    console.log("onChange");
    // console.log(this.state.shipArray);
    // let shipArrayCopy = this.state.shipArray.slice();
    // console.log(shipArrayCopy);
    // shipArrayCopy[key] = e.target.value;
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

  // editModeEnabled(condition) {
  //   if (edit === true) {
  //     //EDIT IS NOT FINISHED!!!!!!
  //     //EDIT IS NOT FINISHED!!!!!!
  //     //EDIT IS NOT FINISHED!!!!!!
  //     //EDIT IS NOT FINISHED!!!!!!
  //   }
  // }

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
        <div key={i}>
          <p>{element.name}</p>
          <p>{element.maxSpeed}</p>
          <p>{element.crew}</p>
          <p>{element.cargoCapacity}</p>
          <button onClick={id => this.removeShip(element.id)}>Remove</button>

          <button onClick={() => this.toggleEdit()}>Edit</button>
        </div>
      );
    });
    let inputMapShipArray = this.state.shipArray.map((el, id) => {
      // let mapShipObject = {
      //   name: el.name,
      //   maxSpeed: el.maxSpeed,
      //   crew: el.crew,
      //   cargoCapacity: el.cargoCapacity
      // };
      return (
        <div key={id}>
          <div>
            <p>{el.name}</p>
            <input
              type="text"
              placeholder={this.state.name}
              value={this.state.name}
              onChange={e => this.onChangeHandler(e, "name")}
            />
          </div>
          <p>{el.maxSpeed}</p>
          <input
            type="text"
            placeholder="test"
            value={this.state.maxSpeed}
            onChange={e => this.onChangeHandler(e, "maxSpeed")}
          />
          <p>{el.crew}</p>
          <input
            type="text"
            placeholder="test"
            value={this.state.crew}
            onChange={e => this.onChangeHandler(e, "crew")}
          />
          <p>{el.cargoCapacity}</p>
          <input
            type="text"
            placeholder="test"
            value={this.state.cargoCapacity}
            onChange={e => this.onChangeHandler(e, "cargoCapacity")}
          />
          <button onClick={id => this.removeShip(el.id)}>Remove</button>
          <button onClick={id => this.editShip(el.id)}>Save</button>
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
        {!this.state.editFlag ? mapShipArray : inputMapShipArray}
      </div>
    );
  }
}
