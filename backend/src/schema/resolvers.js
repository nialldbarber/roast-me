import { Store } from '@models/Store'

export const resolvers = {
  Query: {
    async stores() {
      try {
        const stores = await Store.find()
        return stores
      } catch (err) {
        throw new Error(err)
      }
    },
  },
  Mutation: {
    createStore: async (_, { _id, name, description, rating  }) => {
      const store = new Store({ _id, name, description, rating })
      await store.save()
      return store
    },
  },
}
