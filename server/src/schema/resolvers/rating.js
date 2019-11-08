import { UserInputError } from 'apollo-server-express'
import { Store } from '~@models/Store'
import { User } from '~@models/User'
import { checkAuth } from '~@utils/auth'

export const rating = {
	Mutation: {
		rateStore: async (_, { _id, taste, variety, atmosphere, wifi, seating, restroomQuality }, context) => {
			// TODOS:
			// Make sure that a user can only rate a shop once

			const { username } = checkAuth(context)

			const getStore = await Store.findById(_id)
			const getUser = await User.find({})

			const getUserId = getUser.filter((user) => user.username === username)
			const userId = getUserId[0]._id

			// console.log(userId)
			// console.log('---------------------')
			// console.log(getStore.ratingAverage)

			//console.log(getStore.ratingAverage.filter((store) => store.userId === userId))

			if (getStore.ratingAverage.find((person) => person._id === userId)) {
				console.log('it exists on the DB')
				throw new UserInputError('Store not found')
			} else {
				console.log('it doesnt exist on the DB')
				getStore.ratingAverage.unshift({
					taste,
					variety,
					atmosphere,
					wifi,
					seating,
					restroomQuality,
					userId: userId
				})
			}

			// if (getStore) {
			// 	if (getStore.ratingAverage.filter((user) => user.userId === userId)) {
			// 		getStore.ratingAverage.unshift({
			// 			taste,
			// 			variety,
			// 			atmosphere,
			// 			wifi,
			// 			seating,
			// 			restroomQuality,
			// 			userId: userId
			// 		})
			// 	}
			// } else {
			// 	throw new UserInputError('Store not found')
			// }

			await getStore.save()
			return getStore
		}
	}
}

// loop through
