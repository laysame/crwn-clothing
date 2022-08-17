import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {UserProvide} from "./context/User.Context";
import {CategoriesProvider} from "./context/CategoriesContext";
import {CartProvider} from "./context/Cart.Context";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <UserProvide>
            <CategoriesProvider>
                <CartProvider>
                    <App/>
                </CartProvider>
            </CategoriesProvider>
        </UserProvide>
    </BrowserRouter>,
    document.getElementById('root')
);


