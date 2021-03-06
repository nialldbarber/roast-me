import React, { FC, Fragment, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from '~/state/auth'
import useForm from '~/hooks/useForm'
import Button from '~/components/button'
import Loading from '~/components/loading'
import FormErrors from '~/components/form-errors'
import { UserForm } from '~/styles/components/form'
import { LOGIN_USER } from '~/components/login/schema'
import { Props, Values } from '~/components/login/types'

const Login: FC<Props> = ({ visibility }) => {
	const history = useHistory()
	const context = useContext(AuthContext)
	const [errors, setErrors] = useState<any>({})
	const { values, handleChange, handleSubmit } = useForm(handleLoginUser, {
		username: '',
		password: ''
	})

	const { username, password }: Values = values

	const [userLogin, { loading, error }] = useMutation(LOGIN_USER, {
		update(_, { data: { userLogin: userData } }) {
			context.login(userData)
			history.push('/')
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
			<UserForm className={`login ${visibility ? 'active' : ''}`} onSubmit={handleSubmit} noValidate>
				<label htmlFor="username">
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						placeholder="Username"
						className={errors.username ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="password">
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						placeholder="Password"
						className={errors.password ? 'error' : ''}
						onChange={handleChange}
					/>
				</label>
				<Button type="submit" text="Login" />
				<FormErrors errors={errors} />
			</UserForm>
		</Fragment>
	)
}

export default Login
