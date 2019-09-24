import { Schema, model } from 'mongoose'

const storeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
  },
  // location: {
  // 	type: {
  // 		type: String,
  // 		default: 'Point'
  // 	},
  // 	coordinates: [
  // 		{
  // 			type: Number,
  // 			required: true
  // 		}
  // 	],
  // 	address: {
  // 		type: String,
  // 		required: true
  // 	}
  // }
})

export const Store = model('Store', storeSchema)
