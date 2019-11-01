import { gql } from 'apollo-boost'

export const GET_STORES = gql`
	{
		getAllStores {
			_id
			name
			location
			description
			rating
			likes {
				_id
				createdAt
				username
			}
			comments {
				_id
				createdAt
				username
				body
				userId
			}
		}
	}
`
