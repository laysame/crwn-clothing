import React from 'react';
import {Route, Switch} from "react-router-dom";

import Homepage from './pages/homepage/Homepage';
import ShopPage from './shop/ShopPage';
import Header from './components/header-component/Header';
import Authentication from './pages/authentication/Authentication';
import CheckoutPage from "./pages/checkout-page/CheckoutPage";
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
            </Switch>
        </div>
    )
}

//Header outside the Switch and Route components. It must be independent
