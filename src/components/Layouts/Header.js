import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

export default props => (
  <AppBar position="static" color="white">
    <Toolbar>
      <Typography variant="display3" color="black">
        StarWars
      </Typography>
    </Toolbar>
  </AppBar>
);
