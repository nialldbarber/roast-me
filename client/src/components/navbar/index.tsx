import React, { FC, useState, useContext, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import { AuthContext } from '~@state/auth'
import Modal from '~@components/modal'
import logo from '~@assets/images/logo.svg'

const Navbar: FC = () => {
	const { user, logout } = useContext(AuthContext)
	const [ modal, setModal ] = useState(false)

	const handleModal = () => {
		setModal(!modal)
	}

	const handleRemoveModal = () => {
		logout()
		setModal(false)
	}

	return (
		<div className="navbar">
			<header>
				<div className="logo">
					<Link to="/">
						<SVG src={logo} alt="Logo" aria-label="Logo" />
					</Link>
				</div>
			</header>
			<nav>
				<ul>
					{user ? (
						<Fragment>
							<li>
								<NavLink to="#" className="inactive">
									Hey, {user.username}!
								</NavLink>
							</li>
							<li>
								<NavLink to="profile/" activeClassName="active">
									Me
								</NavLink>
							</li>
						</Fragment>
					) : (
						''
					)}
					<li>
						<NavLink exact to="/" activeClassName="active">
							Stores
						</NavLink>
					</li>
					{user ? (
						<Fragment>
							<li>
								<NavLink to="/add-store" activeClassName="active">
									Add Store
								</NavLink>
							</li>
							<li>
								<NavLink to="#" activeClassName="active" onClick={handleModal}>
									Logout
								</NavLink>
							</li>
						</Fragment>
					) : (
						<li>
							<NavLink to="/login" activeClassName="active">
								Login
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
			<Modal title="Logout" message="Sure ya wanna?" button="Logout" action={handleRemoveModal} active={modal} />
		</div>
	)
}

export default Navbar
