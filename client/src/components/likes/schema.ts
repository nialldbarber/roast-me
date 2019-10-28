import { gql } from 'apollo-boost'

export const LIKE_STORE = gql`
	mutation likeStore($_id: ID!) {
		likeStore(_id: $_id) {
      _id
			likes {
				_id
				username
			}
		}
	}
`
