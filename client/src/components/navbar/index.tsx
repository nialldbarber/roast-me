import React, { FC, useState, useContext, Fragment } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import SVG from 'react-inlinesvg'
// State
import { AuthContext } from '~@state/auth'
// Components
import Modal from '~@components/modal'
// Styles
import { Nav } from '~@components/navbar/styles'
// Types
import { Props } from '~@components/navbar/types'
// Assets
import logo from '~@assets/images/logo.svg'

const Navbar: FC<Props> = (props) => {
	const { user, logout } = useContext(AuthContext)
	const [modal, setModal] = useState(false)

	const handleRemoveModal = (e: any) => {
		if (e.target.id === 'close') setModal(false)
		else {
			props.history.push('/')
			logout()
			setModal(false)
		}
	}

	return (
		<Nav>
			<div className="logo">
				<Link to="/">
					<SVG src={logo} alt="Logo" aria-label="Logo" />
				</Link>
			</div>
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
								<NavLink to={`/users/${user.id}`} activeClassName="active">
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
								<NavLink to="/community" activeClassName="active">
									Community
								</NavLink>
							</li>
							<li>
								<NavLink to="/add-store" activeClassName="active">
									Add Store
								</NavLink>
							</li>
							<li>
								<NavLink to="#" activeClassName="logout" onClick={() => setModal(!modal)}>
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
			{modal && (
				<Modal
					title="Logout"
					message="Sure ya wanna?"
					button="Logout"
					action={handleRemoveModal}
					active={modal}
					close={handleRemoveModal}
				/>
			)}
		</Nav>
	)
}

export default withRouter(Navbar)
