import React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./shop/ShopPage";
import Header from "./components/header-component/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up page/SignInAndSignUpPage";
import {auth} from './firebase/Firebase.Utils';

import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});

            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path={'/'} component={Homepage}/>
                    <Route path={'/shop'} component={ShopPage}/>
                    <Route path={'/signin'} component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;


//Header outside the Switch and Route components. It must be independent

//inside the Header is passing the props currentUser - if is null, will pass null; if is an object, it will pass it. It will pass the current state of it.