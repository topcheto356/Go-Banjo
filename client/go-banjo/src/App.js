import { Fragment } from 'react';
import Naviagtion from './components/Naviagtion/Naviagtion.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import CreateAd from './components/CreateAd/CreateAd.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authentication from './components/Auth/Authentication.js';
import { useEffect } from 'react';
import { loadUser } from './controllers/authController.js';
import Account from './components/Account/Account.js';
import Houses from './components/Houses/Houses.js';
import House from './components/House/House.js';
import PrivateRoute from './components/routes/PrivateRoute.js';
import Error from './components/Error/Error.js';
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
					<Route exact path='/' component={Header} />
					<Route exact path='/auth' component={Authentication} />
					<PrivateRoute exact path='/me' component={Account} />
					<PrivateRoute exact path='/ads' component={CreateAd} />
					<Route exact path='/houses' component={Houses} />
					<Route exact path='/houses/:id' component={House} />
					<Route path='' component={Error} />
				</Switch>
				{/* <Footer></Footer> */}
			</Router>
		</Fragment>
	);
}

export default App;
