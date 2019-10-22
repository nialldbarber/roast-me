import { UserInputError } from 'apollo-server-express'
import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { User } from '~@models/User'

require('dotenv').config({ path: '.env' })

export const user = {
	Mutation: {
		registerUser: async (_, { registerInput: { username, email, password, confirmPassword } }) => {
			// TODO: validate user data
			// TODO: make sure user doesnt exist already
			const user = await User.findOne({ username })

			if (user) {
				throw new UserInputError('Username is taken', {
					errors: {
						username: 'This username is taken'
					}
				})
			}
			// hash password and create an auth token
			password = await hash(password, 12)

			const newUser = new User({
				email,
				username,
				password,
				createdAt: new Date().toISOString()
			})

			const res = await newUser.save()

			const token = sign(
				{
					id: res.id,
					email: res.email,
					username: res.username
				},
				process.env.JWT_SECRET,
				{ expiresIn: '1h' }
			)

			return {
				...res._doc,
				id: res._id,
				token
			}
		}
	}
}
