import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { UserInputError } from 'apollo-server-express'
import { Store } from '~@models/Store'
import { User } from '~@models/User'
import { validateRegisterInput, validateLoginInput } from '~@utils/validation'

require('dotenv').config({ path: '.env' })

function generateToken(user) {
	return sign(
		{
			_id: user._id,
			email: user.email,
			username: user.username
		},
		process.env.JWT_SECRET,
		{ expiresIn: '1h' }
	)
}

export const resolvers = {
	Query: {
		async getAllStores() {
			try {
				const stores = await Store.find()
				return stores
			} catch (err) {
				throw new Error(err)
			}
		},
		async getIndividualStore(_, { _id }) {
			try {
				const store = await Store.findById(_id)
				return store
			} catch (err) {
				throw new Error(err)
			}
		}
		// async login(_, { username, password }) {
		// 	const { errors, valid } = validateLoginInput(username, password)

		// 	if (!valid) {
		// 		throw new UserInputError('Errors', { errors })
		// 	}

		// 	const user = await User.findOne({ username })

		// 	if (!user) {
		// 		errors.general = 'User not found'
		// 		throw new UserInputError('User not found', { errors })
		// 	}

		// 	const match = await compare(password, user.password)
		// 	if (!match) {
		// 		errors.general = 'Wrong crendetials'
		// 		throw new UserInputError('Wrong crendetials', { errors })
		// 	}

		// 	const token = generateToken(user)

		// 	return {
		// 		...user._doc,
		// 		_id: user._id,
		// 		token
		// 	}
		// }
	},
	Mutation: {
		createStore: async (_, { _id, name, location, description, rating }) => {
			const store = new Store({
				_id,
				name,
				location,
				description,
				rating
			})
			await store.save()
			return store
		},
		async login(_, { username, password }) {
			const { errors, valid } = validateLoginInput(username, password)

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
				errors.general = 'Wrong crendetials'
				throw new UserInputError('Wrong crendetials', { errors })
			}

			const token = generateToken(user)

			return {
				...user._doc,
				_id: user._id,
				token
			}
		},
		async register(_, { registerInput: { username, email, password, confirmPassword } }) {
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
			// hash password and create an auth token
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
