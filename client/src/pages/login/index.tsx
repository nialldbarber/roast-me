import React, { FC, useState } from 'react'
import Form from '~@components/form'
import Register from '~@components/register'
import Tab from '~@components/tab'
import { Wrapper, TabContainer } from '~@pages/login/styles'

const Login: FC = () => {
	const [ visibility, setVisibility ] = useState({ signIn: true, register: false })
	const options = [ 'username', 'password' ]

	const handleVisibility = (e: any) => {
		const target = e.target.name
		if (target === 'signIn') setVisibility({ signIn: true, register: false })
		if (target === 'register') setVisibility({ signIn: false, register: true })
	}

	const { signIn, register } = visibility

	return (
		<div className="container">
			<h1>Sign in or create an account</h1>
			<TabContainer>
				<Tab text="Sign In" click={handleVisibility} name="signIn" active={signIn ? 'active' : ''}>
					Sign In
				</Tab>
				<Tab text="Register" click={handleVisibility} name="register" active={register ? 'active' : ''}>
					Register
				</Tab>
			</TabContainer>

			<Wrapper>
				<Form options={options} visibility={signIn} />
				<Register visibility={register} />
			</Wrapper>
		</div>
	)
}

export default Login
