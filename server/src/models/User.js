import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
	username: String,
	email: String,
	password: String,
	createdAt: String,
	storesAdded: [
		{
			name: String,
			location: String,
			description: String,
			createdAt: String,
			rating: String
		}
	]
})

export const User = model('User', UserSchema)
