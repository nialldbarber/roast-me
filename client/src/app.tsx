import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ScrollToTop from 'react-router-scroll-top'
// Components
import Navbar from '~@components/navbar'
import AddStore from '~@pages/add-store'
import AllStores from '~@pages/all-stores'
import IndividualStore from '~@pages/individual-store'
import LoginRegister from '~@pages/login-register'
import UserProfile from '~@pages/user-profile'
import PageNotFound from '~@pages/page-not-found'
// Styles
import { theme } from '~@styles/utils/variables'
import { GlobalStyle } from '~@styles/components/base'
import '~@styles/sass/main.scss'

const App: FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Router>
			<ScrollToTop>
				<Navbar />
				<Switch>
					<Route exact path="/" component={AllStores} />
					<Route path="/add-store" component={AddStore} />
					<Route path="/users" component={UserProfile} />
					<Route path="/users:/id" component={UserProfile} />
					<Route path="/login" component={LoginRegister} />
					<Route path="/store/:id" component={IndividualStore} />
					<Route component={PageNotFound} />
				</Switch>
			</ScrollToTop>
		</Router>
	</ThemeProvider>
)

export default App
