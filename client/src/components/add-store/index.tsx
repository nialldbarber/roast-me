import React, { FC, Fragment, useState, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from '~@state/auth'
import useForm from '~@hooks/useForm'
import Button from '~@components/button'
import Loading from '~@components/loading'
import FormErrors from '~@components/form-errors'
import { Props } from '~@components/form/types'
import { REGISTER_USER } from '~@components/register/schema'
import { UserForm } from '~@styles/components/form'

const AddStoreForm: FC<Props> = ({ title, visibility, page }) => {
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
				<Button type="submit" text="Register" />
				<FormErrors errors={errors} />
			</UserForm>
		</Fragment>
	)
}

export default AddStoreForm
