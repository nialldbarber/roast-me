import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from '~@utils/apollo'
import Navbar from '~@components/navbar'
import AddStore from '~@pages/add-store'
import StoreList from '~@pages/store-list'
import Store from '~@pages/store'
import LoginRegister from '~@pages/login-register'
import PageNotFound from '~@pages/page-not-found'
import '~@styles/sass/main.scss'

const App: FC = () => (
	<ApolloProvider client={client}>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={StoreList} />
				<Route path="/add-store" component={AddStore} />
				<Route path="/store/:id" component={Store} />
				<Route path="/login" component={LoginRegister} />
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	</ApolloProvider>
)

export default App
