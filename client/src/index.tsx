import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
// State
import { AuthProvider } from '~@state/auth'
// Utils
import { client } from '~@utils/apollo'
// Components
import App from '~@app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ApolloProvider>
)
