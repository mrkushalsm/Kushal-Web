import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/foodies">Foodies</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
