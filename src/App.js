import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/cart/comp/Navbar';
import ProductList from './components/cart/comp/ProductList';
import Details from './components/cart/comp/Details';
import Default from './components/cart/comp/Default';
import Cart from './components/cart/comp/CartComponent';

export default class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
            </React.Fragment>
        )
    }
}