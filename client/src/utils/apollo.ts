import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql'
})

const authLink = setContext(() => {
	const token = localStorage.getItem('jwtToken')

	return {
		headers: {
			Authorization: token ? `Bearer ${token}` : ''
		}
	}
})

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})
