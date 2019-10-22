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
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	}
})

export const Store = model('Store', storeSchema)
