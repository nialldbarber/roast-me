import { gql } from 'apollo-boost'

export const GET_INDIVIDUAL_USER = gql`
	query getIndividualUser($_id: ID!) {
		getIndividualUser(_id: $_id) {
			_id
			email
			username
			storesAdded {
				_id
				location
				name
				likes {
					_id
					createdAt
				}
			}
		}
	}
`
