const axios = require("axios");

let shipList = [];
let id = 0;
let maxSpeed = 0;
let crewMembers = 0;
let cargo = 0;

module.exports = {
  addShip: (req, res, next) => {
    console.log(req.body);
    req.body.shipObject.id = id;
    shipList.push(req.body.shipObject);
    console.log(shipList);
    id++;
    res.status(200).send(shipList);
  },
  getShips: (req, res) => {
    res.status(200).send(shipList);
  }
};
