import React, { FC } from 'react'
import Form from '~@components/form'
import { Wrapper } from '~@pages/login/styles'

const Login: FC = () => {
	const options = [ 'username', 'password' ]
	return (
		<div className="container">
			<h1>Sign in or create an account</h1>
			<Wrapper>
				<Form title="Sign In" options={options} />
				<Form title="Register" options={options} />
			</Wrapper>
		</div>
	)
}

export default Login
