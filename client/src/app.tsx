import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from '~@utils/apollo'
import { AuthProvider } from './state/auth'
import Navbar from '~@components/navbar'
import AddStore from '~@pages/add-store'
import AllStores from '~@pages/all-stores'
import IndividualStore from '~@pages/individual-store'
import LoginRegister from '~@pages/login-register'
import UserStores from '~@pages/user-stores'
import PageNotFound from '~@pages/page-not-found'
import '~@styles/sass/main.scss'

const App: FC = () => (
	<ApolloProvider client={client}>
		<AuthProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={AllStores} />
					<Route path="/add-store" component={AddStore} />
					<Route path="/store/:id" component={IndividualStore} />
					<Route path="/login" component={LoginRegister} />
					<Route path="/profile" component={UserStores} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</AuthProvider>
	</ApolloProvider>
)

export default App
