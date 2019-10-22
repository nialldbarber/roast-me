import { store } from '~@schema/resolvers/store'

export const resolvers = {
	Query: {
		...store.Query
	},
	Mutation: {
		...store.Mutation
	}
}
