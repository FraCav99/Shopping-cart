import React, {useState} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
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
        <HashRouter>
            <Nav cartItems={cartItems}/>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/shop' component={Shop} />
                <Route 
                    path='/shop/:id'
                    render={(props) => <ItemDetails {...props} cartItems={cartItems} setCartItems={setCartItems}/>} 
                />
                <Route exact path='/cart' render={() => <Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
                <Route exact path='/checkout' render={() => <Checkout setCartItems={setCartItems}/>} />
            </Switch>
            <Footer />
        </HashRouter>
    );
}

export default Routes;