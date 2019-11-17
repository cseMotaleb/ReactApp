import React from 'react'
import { Link} from "react-router-dom";

	const Nav = () => {
		return (
			<div className="header_menu">
				<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
					<div className="container">
					<Link className="navbar-brand" to="/">React App</Link>
					<ul class="navbar-nav ml-auto">
						<li className="nav-item">
						<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
						<Link  className="nav-link" to="/About">About</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/Contact">Contact</Link>
						</li>  
					</ul>
					</div>
				</nav>
			</div>
			
		)
	}


export default Nav