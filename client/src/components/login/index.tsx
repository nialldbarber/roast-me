import React, { FC, Fragment, useState, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from '~@state/auth'
import useForm from '~@hooks/useForm'
import Button from '~@components/button'
import Loading from '~@components/loading'
import { Props } from '~@components/form/types'
import { LOGIN_USER } from '~@components/login/schema'
import { UserForm } from '~@styles/components/form'

const Login: FC<Props> = ({ title, visibility, page }) => {
	const context = useContext(AuthContext)
	const [ errors, setErrors ] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleLoginUser, {
		username: '',
		password: ''
	})

	const { username, password } = values

	const [ userLogin, { loading, error } ] = useMutation(LOGIN_USER, {
		update(_, { data: { userLogin: userData } }) {
			context.login(userData)
			console.log(userData)
			page.history.push('/')
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		variables: { username, password }
	})

	if (error) console.log(`Error: ${error}`)
	if (loading) return <Loading />

	function handleLoginUser() {
		userLogin()
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
					Password
					<input
						type="password"
						name="password"
						value={password}
						className={errors.password ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<Button type="submit" text="Login" />
				<ul className="form-errors">
					{Object.keys(errors).length > 0 && Object.values(errors).map((val, i) => <li key={i}>{val}</li>)}
				</ul>
			</UserForm>
		</Fragment>
	)
}

export default Login
