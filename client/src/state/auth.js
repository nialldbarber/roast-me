import React, { createContext, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import { LOGIN, LOGOUT, webToken } from '~/constants/auth'
import { authReducer } from '~/reducers/auth'

const initialState = {
	user: null
}

if (localStorage.getItem(webToken)) {
	const decodedToken = jwtDecode(localStorage.getItem(webToken))

	if (decodedToken.exp * 1000 < Date.now()) {
		localStorage.removeItem(webToken)
	} else {
		initialState.user = decodedToken
	}
}

const AuthContext = createContext({
	user: null,
	login: (userData) => { },
	logout: () => { }
})

const AuthProvider = (props) => {
	const [state, dispatch] = useReducer(authReducer, initialState)

	const login = (userData) => {
		localStorage.setItem(webToken, userData.token)
		dispatch({ type: LOGIN, userData })
	}

	const logout = () => {
		localStorage.removeItem(webToken)
		dispatch({ type: LOGOUT })
	}

	return <AuthContext.Provider value={{ user: state.user, login, logout }} {...props} />
}

export { AuthContext, AuthProvider }
