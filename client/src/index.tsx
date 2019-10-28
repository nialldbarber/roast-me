import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
// State
import { AuthProvider } from '~@state/auth'
// Utils
import { client } from '~@utils/apollo'
// Components
import App from '~@app'

render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
