import { gql } from 'apollo-boost'

export const LOGIN_USER = gql`
	mutation userLogin($username: String!, $password: String!) {
		userLogin(username: $username, password: $password) {
			_id
			username
			email
			token
			createdAt
		}
	}
`
