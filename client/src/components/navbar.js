import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import logo from '~@assets/images/logo.svg'
import fire from '~@assets/images/fire.svg'

const Navbar = () => (
	<div className="navbar">
		<header>
			<div className="logo">
				<SVG src={fire} />
				<Link to="/">
					<SVG src={logo} />
				</Link>
			</div>
		</header>
		<nav>
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="active">
						Stores
					</NavLink>
				</li>
				<li>
					<NavLink to="/add-store" activeClassName="active">
						Add Store
					</NavLink>
				</li>
				<li>
					<NavLink to="/login" activeClassName="active">
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	</div>
)

export default Navbar
