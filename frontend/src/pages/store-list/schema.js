import { gql } from 'apollo-boost'

export const GET_STORES = gql`
	{
		stores {
			_id
			name
			description
			rating
		} 
	}
`
