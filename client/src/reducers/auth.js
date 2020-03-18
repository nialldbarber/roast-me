import produce from 'immer'
import { LOGIN, LOGOUT } from '~/constants/auth'

export const authReducer = produce((draft, action) => {
	switch (action.type) {
		case LOGIN:
			draft.user = action.userData
			return
		case LOGOUT:
			draft.user = null
			return
		default:
			return draft
	}
})
