import React, { FC, Fragment, useState, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from '~@state/auth'
import useForm from '~@hooks/useForm'
import Button from '~@components/button'
import Loading from '~@components/loading'
import { Props } from '~@components/form/types'
import { REGISTER_USER } from '~@components/register/schema'
import { UserForm } from '~@styles/components/form'

const Register: FC<Props> = ({ title, visibility, page }) => {
	const context = useContext(AuthContext)
	const [ errors, setErrors ] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleRegisterUser, {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const { username, email, password, confirmPassword } = values

	const [ registerUser, { loading, error } ] = useMutation(REGISTER_USER, {
		update(_, { data: { registerUser: userData } }) {
			console.log(userData)
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
		<Fragment>
			{title}
			<UserForm className={`${visibility ? 'active' : ''}`} onSubmit={handleSubmit} noValidate>
				<label htmlFor="">
					Username
					<input
						type="text"
						name="username"
						value={username}
						className={errors.username ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="">
					Email
					<input
						type="text"
						name="email"
						value={email}
						className={errors.email ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="">
					Password
					<input
						type="password"
						name="password"
						value={password}
						className={errors.password ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="">
					Confirm Password
					<input
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						className={errors.confirmPassword ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<Button type="submit" text="Register" />
				<ul className="form-errors">
					<ul>
						{Object.keys(errors).length > 0 &&
							Object.values(errors).map((val, i) => <li key={i}>{val}</li>)}
					</ul>
				</ul>
			</UserForm>
		</Fragment>
	)
}

export default Register
