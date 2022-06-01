import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';

const Navbar = props => {
  return(
	<nav className="navbar navbar-expand-lg navbar-dark nav1">
  <div className="container">
    <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		<div className="col-md-3"></div>
		<div className="col-md-9">
		<nav className="float-end nav2">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/blog">BLOG</NavLink>
			<NavLink to="/contact">CONTACT</NavLink>
		</nav>
		</div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;