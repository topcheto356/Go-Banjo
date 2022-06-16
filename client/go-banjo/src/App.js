import { Fragment } from 'react';
import Naviagtion from './components/Naviagtion/Naviagtion.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {
	return (
		<Fragment>
			<Naviagtion></Naviagtion>
			<Header></Header>
			<Footer></Footer>
		</Fragment>
	);
}

export default App;
