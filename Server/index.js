const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sp = require(__dirname + "/controllers/ships");
let port = 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const baseUrl = "/api/ships";

app.get(baseUrl, sp.getShips);

app.post(baseUrl, sp.addShip);
app.delete(`${baseUrl}/:id`, sp.deleteShip);
app.put(`${baseUrl}/:id`, sp.editShip);

app.listen(port, () =>
  console.log(`This is BB8 and i am listening on port: ${port}`)
);
