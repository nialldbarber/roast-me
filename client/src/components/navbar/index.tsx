import React, { FC, useState, useContext, Fragment } from 'react'
import { Link, NavLink, withRouter, useHistory } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import { AuthContext } from '~/state/auth'
import Modal from '~/components/modal'
import { Nav } from '~/components/navbar/styles'
import { Props } from '~/components/navbar/types'
import logo from '~/assets/images/logo.svg'

const Navbar: FC<Props> = () => {
	const { user, logout } = useContext(AuthContext)
	const [modal, setModal] = useState<boolean>(false)
	const history = useHistory()

	const handleRemoveModal = (e: any) => {
		if (e.target.id === 'close') setModal(false)
		else {
			history.push('/')
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
									Hey, {user?.username}!
								</NavLink>
							</li>
							<li>
								<NavLink to={`/user/${user?._id || user?.id}`} activeClassName="active">
									Me
								</NavLink>
							</li>
						</Fragment>
					) : (
							''
						)}
					<Fragment>
						<li>
							<NavLink exact to="/" activeClassName="active">
								Stores
							</NavLink>
						</li>
						<li>
							<NavLink to="/community" activeClassName="active">
								Community
							</NavLink>
						</li>
					</Fragment>
					{user ? (
						<Fragment>
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
