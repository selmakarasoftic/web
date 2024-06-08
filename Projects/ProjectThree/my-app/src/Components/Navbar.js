import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./Navbar.css";


function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome to Project Three!
        </Typography>
        <Button color="inherit" component={Link} to="/Home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/Contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/Products">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/AboutUs">
          About Us!
        </Button>
        <Button color="inherit" component={Link} to="/PetiPage">
          PetiPage
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
