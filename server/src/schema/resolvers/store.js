import { AuthenticationError, UserInputError } from 'apollo-server-express'
import { Store } from '~@models/Store'
import { User } from '~@models/User'
import { checkAuth } from '~@utils/auth'
import { validateNewStoreInput } from '~@utils/validation/store'

export const store = {
	Query: {
		getAllStores: async () => {
			try {
				const stores = await Store.find().sort({ createdAt: -1 })
				return stores
			} catch (err) {
				throw new Error(err)
			}
		},
		getIndividualStore: async (_, { _id }) => {
			try {
				const store = await Store.findById(_id)
				return store
			} catch (err) {
				throw new Error(err)
			}
		}
	},
	Mutation: {
		createStore: async (_, { _id, name, location, description, rating }, context) => {
			const user = checkAuth(context)

			const { valid, errors } = validateNewStoreInput(name, location, description, rating)

			if (!valid) {
				throw new UserInputError('Errors', { errors })
			}

			// Create new store
			const newStore = new Store({
				user: user.id,
				username: user.username,
				_id,
				name,
				location,
				description,
				rating,
				createdAt: new Date().toISOString()
			})

			const currentUser = await User.findById(user.id)
			currentUser.storesAdded.unshift(newStore)

			await currentUser.save()
			await newStore.save()

			return newStore
		},
		deleteStore: async (_, { _id }, context) => {
			const user = checkAuth(context)

			try {
				const store = await Store.findById(_id)

				if (user.username === store.username) {
					await store.delete()

					return 'Store deleted successfully'
				} else {
					throw new AuthenticationError('Action not allowed')
				}
			} catch (err) {
				throw new Error(err)
			}
		}
	}
}
