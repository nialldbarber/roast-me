import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from '~@utils/apollo'
import Navbar from '~@components/navbar'
import AddStore from '~@pages/add-store/add-store'
import StoreList from '~@pages/store-list/store-list'
import Store from '~@pages/store/store'
import Login from '~@pages/login'
import PageNotFound from '~@pages/page-not-found/page-not-found'
import '~@styles/sass/main.scss'

const App = () => (
	<ApolloProvider client={client}>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={StoreList} />
				<Route path="/add-store" component={AddStore} />
				<Route path="/store/:id" component={Store} />
				<Route path="/login" component={Login} />
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	</ApolloProvider>
)

export default App
