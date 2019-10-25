import React, { createContext, useReducer } from 'react'
import { LOGIN, LOGOUT } from '~@constants/auth'
import { authReducer } from '~@reducers/auth'

const initialState = {
	user: null
}

const AuthContext = createContext({
	user: null,
	login: (userData) => {},
	logout: () => {}
})

const AuthProvider = (props) => {
	const [ state, dispatch ] = useReducer(authReducer, initialState)

	const login = (userData) => {
		dispatch({ type: LOGIN, userData })
	}

	const logout = () => {
		dispatch({ type: LOGOUT })
	}

	return <AuthContext.Provider value={{ user: state.user, login, logout }} {...props} />
}

export { AuthContext, AuthProvider }
