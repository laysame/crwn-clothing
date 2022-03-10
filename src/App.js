import React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./shop/ShopPage";
import Header from "./components/header-component/Header";

import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={'/'} component={Homepage}/>
                <Route path={'/shop'} component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;


//Header outside the Switch and Route components. It must be independent