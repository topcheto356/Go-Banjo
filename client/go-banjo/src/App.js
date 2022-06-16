import { Fragment } from 'react';
import Naviagtion from './components/Naviagtion/Naviagtion.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
    return (
        <Fragment>
            <Router>
                <Naviagtion></Naviagtion>
                <Switch>
                    <Header></Header>
                </Switch>
                <Footer></Footer>
            </Router>
        </Fragment>
    );
}

export default App;
