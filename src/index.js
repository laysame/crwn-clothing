import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {UserProvide} from "./context/User.Context";
import {CategoriesProvider} from "./context/CategoriesContext";
import {CartProvider} from "./context/Cart.Context";
import {Elements} from "@stripe/react-stripe-js";
import {stripePromise} from "./utils/stripe/StripeUtils";
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


