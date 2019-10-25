import React, { FC, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import { AuthContext } from '~@state/auth'
import logo from '~@assets/images/logo.svg'

const Navbar: FC = () => {
	const { user, logout } = useContext(AuthContext)

	return (
		<div className="navbar">
			<header>
				<div className="logo">
					<Link to="/">
						<SVG src={logo} />
					</Link>
				</div>
			</header>
			<nav>
				<ul>
					{user ? (
						<li>
							<NavLink to="#" className="inactive">
								Hey, {user.username}!
							</NavLink>
						</li>
					) : (
						''
					)}
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
					{user ? (
						<li>
							<NavLink to="/login" activeClassName="active" onClick={logout}>
								Logout
							</NavLink>
						</li>
					) : (
						<li>
							<NavLink to="/login" activeClassName="active">
								Login
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
