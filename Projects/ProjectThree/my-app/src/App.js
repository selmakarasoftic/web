import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Products from './Pages/Products';
import Contact from "./Pages/Contact";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";


function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="container">
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
                   
        </Routes>
      </div>
    </Router>
  );
}


export default App;