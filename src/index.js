import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {UserProvide} from "./context/User.Context";
import {ProductsProvide} from "./context/Products.Context";
import {CartProvider} from "./context/Cart.Context";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <UserProvide>
            <ProductsProvide>
                <CartProvider>
                    <App/>
                </CartProvider>
            </ProductsProvide>
        </UserProvide>
    </BrowserRouter>,
    document.getElementById('root')
);


