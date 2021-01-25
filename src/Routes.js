import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ItemDetails from './components/ItemDetails';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

const Routes = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <Router basename="/">
            <Nav cartItems={cartItems}/>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={App} />
                <Route exact path={process.env.PUBLIC_URL + '/shop'} component={Shop} />
                <Route 
                    path={process.env.PUBLIC_URL + '/shop/:id'}
                    render={(props) => <ItemDetails {...props} cartItems={cartItems} setCartItems={setCartItems}/>} 
                />
                <Route exact path={process.env.PUBLIC_URL + '/cart'} render={() => <Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
                <Route exact path={process.env.PUBLIC_URL + '/checkout'} render={() => <Checkout setCartItems={setCartItems}/>} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default Routes;