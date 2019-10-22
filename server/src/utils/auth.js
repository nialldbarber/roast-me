import { AuthenticationError } from 'apollo-server-express'
import { verify } from 'jsonwebtoken'

require('dotenv').config({ path: '.env' })

export const checkAuth = (context) => {
	const authHeader = context.req.headers.authorization

	if (authHeader) {
		const token = authHeader.split('Bearer ')[1]

		if (token) {
			try {
				const user = verify(token, process.env.JWT_SECRET)
				return user
			} catch (err) {
				throw new AuthenticationError('Invalid/Expired token')
			}
		}

		throw new Error("Authentication token must be 'Bearer [token]")
	}

	throw new Error('Authorization header must be provided')
}
