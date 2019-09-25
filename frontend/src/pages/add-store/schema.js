import { gql } from 'apollo-boost'

export const CREATE_STORE = gql`
	mutation CreateStore($name: String!, $description: String!, $rating: Int!) {
		createStore(name: $name, description: $description, rating: $rating) {
			name
			description
			rating
		}
	}
`
