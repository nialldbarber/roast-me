import { gql } from 'apollo-boost'

export const CREATE_STORE = gql`
	mutation createStore($name: String!, $location: String!, $description: String!, $rating: Int!) {
		createStore(name: $name, location: $location, description: $description, rating: $rating) {
			_id
			name
			location
			description
			rating
			username
		}
	}
`
