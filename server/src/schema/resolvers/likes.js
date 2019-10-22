import { UserInputError } from 'apollo-server-core'
import { Store } from '~@models/Store'
import { checkAuth } from '~@utils/auth'

export const likes = {
	Mutation: {
		likeStore: async (_, { _id }, context) => {
			const { username } = checkAuth(context)

			const store = await Store.findById(_id)

			if (store) {
				if (store.likes.find((like) => like.username === username)) {
					store.likes = store.likes.filter((like) => like.username !== username)
				} else {
					store.likes.push({
						username,
						createdAt: new Date().toISOString()
					})
				}
				await store.save()
				return store
			} else {
				throw new UserInputError('Post not found')
			}
		}
	}
}
