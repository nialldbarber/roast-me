import { gql } from 'apollo-boost'

export const GET_STORES = gql`
	{
		getAllStores {
			_id
			name
			location
			description
			rating
		}
	}
`
