import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/home" activeClassName="active-link">Home</NavLink>
      <NavLink to="/content" activeClassName="active-link">Content</NavLink>
      <NavLink to="/deliveries" activeClassName="active-link">Deliveries</NavLink>
      {/* <NavLink to="/profile" activeClassName="active-link">Profile</NavLink> */}
    </nav>
  );
}

export default NavBar;
