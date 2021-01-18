import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Routes = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default Routes;