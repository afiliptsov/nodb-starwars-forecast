const axios = require("axios");

let shipList = [];
let id = 0;
let name = "";
let maxSpeed = 0;
let crew = 0;
let cargoCapacity = 0;

module.exports = {
  addShip: (req, res, next) => {
    // console.log(req.body);
    req.body.shipObject.id = id;
    shipList.push(req.body.shipObject);
    // console.log(shipList);
    id++;
    res.status(200).send(shipList);
  },
  getShips: (req, res) => {
    res.status(200).send(shipList);
  },
  deleteShip: (req, res) => {
    const deleteID = req.params.id;
    shipIndex = shipList.findIndex(ship => ship.id == deleteID);
    shipList.splice(shipIndex, 1);
    res.status(200).send(shipList);
  },
  editShip: (req, res) => {
    console.log(req.body);
    const { shipObject } = req.body;
    const updateID = req.params.id;
    console.log(shipList);
    let shipIndex = shipList.findIndex(ship => ship.id == updateID);
    let ship = shipList[shipIndex];

    console.log(ship);

    shipList[shipIndex] = {
      id: updateID,
      name: shipObject.name,
      maxSpeed: shipObject.maxSpeed,
      crew: shipObject.crew,
      cargoCapacity: shipObject.cargoCapacity
    };

    console.log(shipList);
    res.status(200).send(shipList);
  }
};
