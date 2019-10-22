import { Store } from '~@models/Store'

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
		}
	}
}
