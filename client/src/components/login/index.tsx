import React, { FC, Fragment, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import Button from '~@components/button'
import Loading from '~@components/loading'
import { Props } from '~@components/form/types'
import { REGISTER_USER } from './schema'

const Login: FC<Props> = ({ title, visibility, page }) => {
	const [ errors, setErrors ] = useState<any>({})
	const [ registerInfo, setRegisterInfo ] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const { username, email, password, confirmPassword } = registerInfo

	const [ registerUser, { loading, error } ] = useMutation(REGISTER_USER, {
		update(_, result) {
			console.log(result), page.history.push('/')
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		variables: { username, email, password, confirmPassword }
	})

	if (error) console.log(`Error: ${error}`)
	if (loading) return <Loading />

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setRegisterInfo({ ...registerInfo, [name]: value })
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		registerUser()
	}

	return (
		<Fragment>
			{title}
			<form style={{ opacity: visibility ? '1' : '0' }} onSubmit={handleSubmit} noValidate>
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
			</form>
			<ul>{Object.keys(errors).length > 0 && Object.values(errors).map((val, i) => <li key={i}>{val}</li>)}</ul>
		</Fragment>
	)
}

export default Register
