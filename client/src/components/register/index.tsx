import React, { FC, useState, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
// State
import { AuthContext } from '~@state/auth'
// Hooks
import useForm from '~@hooks/useForm'
// Components
import Button from '~@components/button'
import Loading from '~@components/loading'
import FormErrors from '~@components/form-errors'
// Styles
import { UserForm } from '~@styles/components/form'
// Schema
import { REGISTER_USER } from '~@components/register/schema'
// Types
import { Props, Values } from '~@components/register/types'

const Register: FC<Props> = ({ visibility, page }) => {
	const context = useContext(AuthContext)
	const [ errors, setErrors ] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleRegisterUser, {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const { username, email, password, confirmPassword }: Values = values

	const [ registerUser, { loading, error } ] = useMutation(REGISTER_USER, {
		update(_, { data: { registerUser: userData } }) {
			context.login(userData)
			page.history.push('/')
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		variables: { username, email, password, confirmPassword }
	})

	if (error) console.log(`Error: ${error}`)
	if (loading) return <Loading />

	function handleRegisterUser() {
		registerUser()
	}

	return (
		<UserForm className={`login ${visibility ? 'active' : ''}`} onSubmit={handleSubmit} noValidate>
			<label htmlFor="username">
				<input
					type="text"
					name="username"
					value={username}
					placeholder="Username"
					className={errors.username ? 'error' : ''}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="email">
				<input
					type="text"
					name="email"
					value={email}
					placeholder="Email"
					className={errors.email ? 'error' : ''}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="password">
				<input
					type="password"
					name="password"
					value={password}
					placeholder="Password"
					className={errors.password ? 'error' : ''}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="confirmPassword">
				<input
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					placeholder="Confirm Password"
					className={errors.confirmPassword ? 'error' : ''}
					onChange={handleChange}
				/>
			</label>
			<Button text="Register" />
			<FormErrors errors={errors} />
		</UserForm>
	)
}

export default Register
