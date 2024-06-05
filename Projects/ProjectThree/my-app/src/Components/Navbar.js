import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      <h1>My React App</h1>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
