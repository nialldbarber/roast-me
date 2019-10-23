import React, { FC, Fragment, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import Button from '~@components/button'
import { Props } from '~@components/form/types'
import { REGISTER_USER } from './schema'

const Register: FC<Props> = ({ title, visibility }) => {
  const [errors, setErrors] = useState<any>({})
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { username, email, password, confirmPassword } = registerInfo

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result)
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: { username, email, password, confirmPassword }
  })

  if (error) console.log(`Error: ${error}`)
  if (loading) console.log(`Error: ${error}`)

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
      <form style={{ opacity: visibility ? '1' : '0' }} onSubmit={handleSubmit}>
        <label htmlFor="">
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </label>
        <Button type="submit" text="Register" />
      </form>
    </Fragment>
  )
}

export default Register
