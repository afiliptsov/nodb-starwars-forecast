import React, { Component } from "react";
import axios from "axios";

const starWarsURL = "https://swapi.co/api/vehicles/";
const weatherURL = "";

export default class Forecast extends Component {
  constructor() {
    super();
    this.state = {
      shipArr: []
    };
  }

  componentDidMount() {
    console.log("HIT");
    axios.get(starWarsURL).then(response => {
      this.setState({ shipArr: response.data.results });
    });
    console.log("COMPONENT MOUNT");
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

    {
      console.log(this.state.shipArr);
    }
    return <div>{mapShipArr}</div>;
  }
}
