import React from 'react';
import {Route, Switch} from "react-router-dom";

import Homepage from './pages/homepage/Homepage';
import ShopPage from './shop/ShopPage';
import Header from './components/header-component/Header';
import Authentication from './pages/authentication/Authentication';

import './App.css';
import CartDropdown from "./components/cart-dropdown/CartDropdown";

export default function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Homepage}/>
                <Route path={'/shop'} component={ShopPage}/>
                <Route path={'/auth'}
                       render={() =>
                           <Authentication />}
                />
            </Switch>
        </div>
    )
}


//Header outside the Switch and Route components. It must be independent

//inside the Header is passing the props currentUser - if is null, will pass null; if is an object, it will pass it. It will pass the current state of it.