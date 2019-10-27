import { gql } from 'apollo-boost'

export const ADD_COMMENT = gql`
	mutation addComment($_id: String!, $body: String!) {
		addComment(_id: $_id, body: $body) {
			_id
			comments {
				_id
				createdAt
				username
				body
			}
		}
	}
`
