import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import './index.css';

import App from './App';
import {UserProvide} from "./context/User.Context";

ReactDOM.render(
    <BrowserRouter>
        <UserProvide>
            <App/>
        </UserProvide>
    </BrowserRouter>,
    document.getElementById('root')
);


