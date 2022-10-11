import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/home"
        >
          HOME
        </NavLink>
        <NavLink to="/myself">MYSELF</NavLink>
        <NavLink to="/herself">HERSELF</NavLink>
        <NavLink to="/ourself">OURSELF</NavLink>
        <NavLink to="/another">ANOTHER</NavLink>
      </div>
      <h1>This will be not change</h1>
    </nav>
  );
};

export default Header;
