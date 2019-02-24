import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Stateless Functional Component

class NavBar extends Component {
	render() {
		return (
			<nav class="navbar navbar-light bg-light">
				<span class="navbar-brand mb-0 h1">
					Navbar <span className="badge pill badge-secondary">{this.props.totalCounters}</span>
				</span>
			</nav>
		);
	}
}

export default NavBar;
