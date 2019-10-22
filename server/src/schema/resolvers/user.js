import { UserInputError } from 'apollo-server-express'
import { hash, compare } from 'bcryptjs'
import { User } from '~@models/User'
import { validateRegisterInput, validateLoginInput, generateToken } from '~@utils/validation'

require('dotenv').config({ path: '.env' })

export const user = {
	Mutation: {
		userLogin: async (_, { username, password }) => {
			const { valid, errors } = validateLoginInput(username, password)

			if (!valid) {
				throw new UserInputError('Errors', { errors })
			}

			const user = await User.findOne({ username })

			if (!user) {
				errors.general = 'User not found'
				throw new UserInputError('User not found', { errors })
			}

			const match = await compare(password, user.password)

			if (!match) {
				errors.general = 'Wrong credentials'
				throw new UserInputError('Wrong credentials', { errors })
			}

			const token = generateToken(user)

			return {
				...user._doc,
				id: user._id,
				token
			}
		},
		registerUser: async (_, { registerInput: { username, email, password, confirmPassword } }) => {
			const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword)

			if (!valid) {
				throw new UserInputError('Errors', { errors })
			}

			const user = await User.findOne({ username })

			if (user) {
				throw new UserInputError('Username is taken', {
					errors: {
						username: 'This username is taken'
					}
				})
			}

			password = await hash(password, 12)

			const newUser = new User({
				email,
				username,
				password,
				createdAt: new Date().toISOString()
			})

			const res = await newUser.save()

			const token = generateToken(res)

			return {
				...res._doc,
				id: res._id,
				token
			}
		}
	}
}
