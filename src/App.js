import React from 'react';
import {Route, Switch} from "react-router-dom";

import Homepage from './pages/homepage/Homepage';
import ShopPage from './shop/ShopPage';
import Header from './components/header-component/Header';
import Authentication from './pages/authentication/Authentication';

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
/*
 this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            // make sure that the current user is got from the object of userAuth - changed the parameter user to userAuth
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth); //get back the object using this function

                const unsub = onSnapshot(doc(db, "users", userAuth.uid), (snapshot) => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                    console.log("Current data: ", snapshot.data());
                    console.log("UserRef:", userRef );
                });

            } else {
                this.setState({currentUser: null});
            }
        })
 */
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
                    <Route path={'/auth'}
                           render={(props) =>
                               <Authentication {...props}/>}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;


//Header outside the Switch and Route components. It must be independent

//inside the Header is passing the props currentUser - if is null, will pass null; if is an object, it will pass it. It will pass the current state of it.