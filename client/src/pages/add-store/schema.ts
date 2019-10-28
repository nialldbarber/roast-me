import { gql } from 'apollo-boost'

export const CREATE_STORE = gql`
	mutation CreateStore($name: String!, $location: String!, $description: String!, $rating: Int!) {
		createStore(name: $name, location: $location, description: $description, rating: $rating) {
			name
			location
			description
			rating
		}
	}
`
