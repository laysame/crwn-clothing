import React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./shop/ShopPage";
import Header from "./components/header-component/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up page/SignInAndSignUpPage";
import {auth, createUserProfileDocument, signInWithGoogle} from './firebase/Firebase.Utils';

import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    handleSignIn = event => {
        signInWithGoogle().then((currentUser) => {
            console.log("caralho")
            this.setState({currentUser: currentUser});
        });
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
            createUserProfileDocument(user);
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
                    <Route path={'/signin'}
                           render={(props) => <SignInAndSignUpPage {...props} onSignIn={this.handleSignIn} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;


//Header outside the Switch and Route components. It must be independent

//inside the Header is passing the props currentUser - if is null, will pass null; if is an object, it will pass it. It will pass the current state of it.