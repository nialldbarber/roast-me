import React, { FC, useState } from 'react'
import Register from '~@components/register'
import Login from '~@components/login'
import Tab from '~@components/tab'
import { TabContainer, Wrapper } from '~@pages/login-register/styles'

const LoginRegister: FC = (props) => {
	const [ visibility, setVisibility ] = useState({ signIn: true, register: false })

	const handleVisibility = (e: any) => {
		const target = e.target.name
		if (target === 'signIn') setVisibility({ signIn: true, register: false })
		if (target === 'register') setVisibility({ signIn: false, register: true })
	}

	const { signIn, register } = visibility

	return (
		<div className="container">
			<h2 className="title">Sign In/Register</h2>
			<Wrapper>
				<TabContainer>
					<Tab text="Sign In" click={handleVisibility} name="signIn" active={signIn ? 'active' : ''}>
						Sign In
					</Tab>
					<Tab text="Register" click={handleVisibility} name="register" active={register ? 'active' : ''}>
						Register
					</Tab>
				</TabContainer>
				<Login visibility={signIn} page={props} />
				<Register visibility={register} page={props} />
			</Wrapper>
		</div>
	)
}

export default LoginRegister
