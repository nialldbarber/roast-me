import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ScrollToTop from 'react-router-scroll-top'
// Components
import Navbar from '~/components/navbar'
import Footer from '~/components/footer'
import AddStore from '~/pages/add-store'
import AllStores from '~/pages/all-stores'
import IndividualStore from '~/pages/individual-store'
import LoginRegister from '~/pages/login-register'
import IndividualUser from '~/pages/individual-user'
import AllUsers from '~/pages/all-users'
import PageNotFound from '~/pages/page-not-found'
// Styles
import { theme } from '~/styles/utils/variables'
import { GlobalStyle } from '~/styles/components/base'

const App: FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Router>
			<ScrollToTop>
				<Navbar />
				<main>
					<Switch>
						<Route exact path="/" component={AllStores} />
						<Route path="/add-store" component={AddStore} />
						<Route exact path="/user/:id" component={IndividualUser} />
						<Route path="/login" component={LoginRegister} />
						<Route path="/store/:id" component={IndividualStore} />
						<Route path="/community" component={AllUsers} />
						<Route component={PageNotFound} />
					</Switch>
				</main>
				<Footer />
			</ScrollToTop>
		</Router>
	</ThemeProvider>
)

export default App
