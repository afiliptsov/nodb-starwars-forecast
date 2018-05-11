const axios = require("axios");

let shipList = [];
let id = 0;
let maxSpeed = 0;
let crewMembers = 0;
let cargo = 0;

module.exports={
    addShip:(req,res,next)=>{
        req.body.id = id;
        shipList.push(req.body);
        id++;
        res.status(200).send(shipList);
    },
    getShips: (req,res)=>{
        res.status(200).send(shipList);
    }





}
