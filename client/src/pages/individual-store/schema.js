import { gql } from 'apollo-boost'

export const GET_INDIVIDUAL_STORE = gql`
	query getIndividualStore($_id: ID!) {
		getIndividualStore(_id: $_id) {
			_id
			name
			location
			description
			rating
		}
	}
`
