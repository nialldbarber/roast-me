import { Schema, model } from 'mongoose'

const storeSchema = new Schema({
	name: String,
	location: String,
	description: String,	
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
			restroomQuality: Number,
			userId: String
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
