import React from 'react';
import {Route, Switch} from "react-router-dom";

import Homepage from './routes/homepage/Homepage';
import ShopPagesRoutes from './shop/shop-pages-routes';
import Header from './components/header-component/Header';
import Authentication from './routes/authentication/Authentication';
import CheckoutPage from "./routes/checkout-page/CheckoutPage";
import Orders from "./components/orders/Orders";

import './App.css';

const App = () => {

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop/' component={ShopPagesRoutes}/>
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

export default App;