import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { webToken } from '~/constants/auth'

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql'
})

const authLink = setContext(() => {
	const token = localStorage.getItem(webToken)

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
