import { Schema, model } from 'mongoose'

const storeSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		unique: false
	},
	location: {
		type: String,
		trim: true,
		required: true
	},
	description: {
		type: String,
		trim: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	rating: {
		type: Number
	},
	ratingAverage: [
		{
			taste: Number,
			variety: Number,
			atmosphere: Number,
			wifi: Number,
			seating: Number,
			restroomQuality: Number
		}
	],
	comments: [
		{
			body: String,
			username: String,
			createdAt: String,
			userId: String
		}
	],
	likes: [
		{
			username: String,
			createdAt: String
		}
	],
	username: String,
	userId: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

export const Store = model('Store', storeSchema)
