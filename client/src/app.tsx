import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { client } from '~@utils/apollo'
import { AuthProvider } from '~@state/auth'
import Navbar from '~@components/navbar'
import AddStore from '~@pages/add-store'
import AllStores from '~@pages/all-stores'
import IndividualStore from '~@pages/individual-store'
import LoginRegister from '~@pages/login-register'
import UserProfile from '~@pages/user-profile'
import PageNotFound from '~@pages/page-not-found'
import { theme } from './styles/utils/variables'
import { GlobalStyle } from './styles/components/base'
import '~@styles/sass/main.scss'

const App: FC = () => (
	<ApolloProvider client={client}>
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={AllStores} />
						<Route path="/add-store" component={AddStore} />
						<Route path="/store/:id" component={IndividualStore} />
						<Route path="/login" component={LoginRegister} />
						<Route path="/profile" component={UserProfile} />
						<Route component={PageNotFound} />
					</Switch>
				</Router>
			</ThemeProvider>
		</AuthProvider>
	</ApolloProvider>
)

export default App
