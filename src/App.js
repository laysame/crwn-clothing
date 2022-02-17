import React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import './App.css';


const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
    );

function App() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={Homepage}/>
                <Route path={'/shop/hats'} component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
