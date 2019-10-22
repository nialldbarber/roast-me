import { Store } from '~@models/Store'
import { checkAuth } from '~@utils/auth'

export const store = {
	Query: {
		getAllStores: async () => {
			try {
				const stores = await Store.find()
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
			const store = checkAuth(context)

			const newStore = new Store({
				user: store.id,
				username: store.username,
				_id,
				name,
				location,
				description,
				rating,
				createdAt: new Date().toISOString()
			})

			await newStore.save()
			return newStore
		}
	}
}
