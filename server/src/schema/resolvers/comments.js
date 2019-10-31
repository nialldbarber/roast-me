import { AuthenticationError, UserInputError } from 'apollo-server-express'
import { Store } from '~@models/Store'
import { checkAuth } from '~@utils/auth'

export const comments = {
	Mutation: {
		addComment: async (_, { _id, body }, context) => {
			const { username } = checkAuth(context)

			if (body.trim() === '') {
				throw new UserInputError('Empty comment', {
					errors: {
						body: 'Please enter a comment'
					}
				})
			}

			const store = await Store.findById(_id)

			if (store) {
				store.comments.unshift({
					body,
					username,
					createdAt: new Date().toISOString()
				})

				await store.save()
				return store
			} else {
				throw new UserInputError('Store not found')
			}
		},
		deleteComment: async (_, { _id, commentId }, context) => {
			const { username } = checkAuth(context)

			const store = await Store.findById(_id)

			if (store) {
				const commentIndex = store.comments.findIndex((comment) => comment.id === commentId)

				if (store.comments[commentIndex].username === username) {
					store.comments.splice(commentIndex, 1)
					await store.save()
					return store
				} else {
					throw new AuthenticationError('Action not allowed')
				}
			} else {
				throw new UserInputError('Post not found')
			}
		}
	}
}
