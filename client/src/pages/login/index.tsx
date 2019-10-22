import React, { FC } from 'react'
import Form from '~@components/form'

const Login: FC = () => {
	const options = [ 'username', 'password' ]
	return (
		<div className="container">
			<h1>Login page</h1>
			<Form options={options} />
		</div>
	)
}

export default Login
