import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div >
      <ul style={{ display: "flex", gap: "50px", marginLeft: "30px", listStyle : 'none' }}>
        <li >
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
