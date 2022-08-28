import React from 'react';
import {Route, Switch} from "react-router-dom";

import Homepage from './routes/homepage/Homepage';
import ShopPage from './shop/ShopPage';
import Header from './components/header-component/Header';
import Authentication from './routes/authentication/Authentication';
import CheckoutPage from "./routes/checkout-page/CheckoutPage";
import Orders from "./components/order/Orders";

import './App.css';

export default function App() {

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop/' component={ShopPage}/>
                <Route path='/auth'
                       render={() =>
                           <Authentication/>}
                />
                <Route path='/checkout' component={CheckoutPage}/>
                <Route path='/orders' component={Orders}/>
            </Switch>
        </div>
    )
}

//Header outside the Switch and Route components. It must be independent
