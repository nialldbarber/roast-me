import React, { FC, useState } from 'react'
import Form from '~@components/form'
import Register from '~@components/register'
import { Wrapper } from '~@pages/login/styles'

const Login: FC = (props) => {
	const [visibility, setVisibility] = useState({ signIn: true, register: false })
	const options = ['username', 'password']

	const handleVisibility = (e: any) => {
		const target = e.target.name
		if (target === 'signIn') setVisibility({ signIn: true, register: false })
		if (target === 'register') setVisibility({ signIn: false, register: true })
	}

	const { signIn, register } = visibility

	return (
		<div className="container">
			<h1>Sign in or create an account</h1>
			<div>
				<button onClick={handleVisibility} name="signIn">
					Sign In
				</button>
				<button onClick={handleVisibility} name="register">
					Register
				</button>
			</div>
			<Wrapper>
				<Form title="Sign In" options={options} visibility={signIn} />
				<Register title="Register" visibility={register} redirect={props} />
			</Wrapper>
		</div>
	)
}

export default Login
