import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {UserProvide} from "./context/user-context";
import {CategoriesProvider} from "./context/categories-context";
import {CartProvider} from "./context/cart-context";
import {Elements} from "@stripe/react-stripe-js";
import {stripePromise} from "./utils/stripe/stripe-utils";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <UserProvide>
            <CategoriesProvider>
                <CartProvider>
                    <Elements stripe={stripePromise}>
                        <App/>
                    </Elements>
                </CartProvider>
            </CategoriesProvider>
        </UserProvide>
    </BrowserRouter>,
    document.getElementById('root')
);


