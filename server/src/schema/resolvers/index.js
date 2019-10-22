import { store } from '~@schema/resolvers/store'
import { user } from '~@schema/resolvers/user'
import { comments } from '~@schema/resolvers/comments'

export const resolvers = {
	Query: {
		...store.Query,
		...user.Query
	},
	Mutation: {
		...store.Mutation,
		...user.Mutation,
		...comments.Mutation
	}
}
