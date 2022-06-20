import { Fragment } from 'react';
import Naviagtion from './components/Naviagtion/Naviagtion.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authentication from './components/Auth/Authentication.js';
function App() {
	return (
		<Fragment>
			<Router>
				<Naviagtion></Naviagtion>
				<Switch>
					<Route exact path="/" component={Header} />
					<Route exact path="/register" component={Authentication} />
				</Switch>
				<Footer></Footer>
			</Router>
		</Fragment>
	);
}

export default App;
