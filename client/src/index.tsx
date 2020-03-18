import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { AuthProvider } from '~/state/auth'
import { client } from '~/utils/apollo'
import App from '~/app'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ApolloProvider client={client}>
		<AuthProvider>
			<App />
		</AuthProvider>
	</ApolloProvider>
)
