import { LOGIN, LOGOUT } from '~/constants/auth'

export const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, user: action.userData }
		case LOGOUT:
			return { ...state, user: null }
		default:
			return state
	}
}
