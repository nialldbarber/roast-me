import { store } from '~@schema/resolvers/store'
import { user } from '~@schema/resolvers/user'

export const resolvers = {
	Query: {
		...store.Query,
		...user.Query
	},
	Mutation: {
		...store.Mutation,
		...user.Mutation
	}
}
