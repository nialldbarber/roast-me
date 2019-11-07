import { UserInputError } from 'apollo-server-express'
import { Store } from '~@models/Store'
import { User } from '~@models/User'
import { checkAuth } from '~@utils/auth'

export const rating = {
  Mutation: {
    rateStore: async (_, { _id, taste, variety, atmosphere, wifi, seating, restroomQuality }, context) => {
      const { username } = checkAuth(context)

      const getStore = await Store.findById(_id)
      const getUser = await User.find({})

      const getUserId = getUser.filter((user) => user.username === username)
      const userId = getUserId[0]._id

      if (getStore) {
        getStore.ratingAverage.unshift({
          taste,
          variety,
          atmosphere,
          wifi,
          seating,
          restroomQuality,
          userId: userId,
        })
      } else {
        throw new UserInputError('Store not found')
      }

      await getStore.save()
      return getStore
    }
  }
}
