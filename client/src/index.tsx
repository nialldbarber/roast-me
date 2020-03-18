import React from 'react'
import { createRoot } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { AuthProvider } from '~/state/auth'
import { client } from '~/utils/apollo'
import App from '~/app'

createRoot(document.getElementById('root')).render(
	<ApolloProvider client={client}>
		<AuthProvider>
			<App />
		</AuthProvider>
	</ApolloProvider>
)
