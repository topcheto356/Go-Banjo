import { Fragment } from 'react';
import Naviagtion from './components/Naviagtion/Naviagtion.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authentication from './components/Auth/Authentication.js';
import { useEffect } from 'react';
import { loadUser } from './controllers/authController.js';
import Account from './components/Account/Account.js';
function App() {
	useEffect(() => {
		if (localStorage.getItem('token')) {
			loadUser(localStorage.getItem('token'));
		}
	}, []);

	return (
		<Fragment>
			<Router>
				<Naviagtion></Naviagtion>
				<Switch>
					<Route exact path="/" component={Header} />
					<Route exact path="/auth" component={Authentication} />
					<Route exact path="/me" component={Account} />
				</Switch>
				{/* <Footer></Footer> */}
			</Router>
		</Fragment>
	);
}

export default App;
