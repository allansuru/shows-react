import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
	console.log('NavBar - Rendered');
	return (
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand mb-0 h1">
				Navbar <span className="badge pill badge-secondary">{totalCounters}</span>
			</span>
		</nav>
	);
};

export default NavBar;
