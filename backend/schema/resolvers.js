import Store from '../models/store';

export const resolvers = {
  Query: {
    stores: () => Store.find(),
  },
  Mutation: {
    createStore: async (_, { name }) => {
      const store = new Store({ name });
      await store.save();
      return store;
    },
  },
};
