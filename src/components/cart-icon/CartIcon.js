import React, {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {CartContext} from "../../context/Cart.Context";

import './CartIcon.scss';


export default function CartIcon() {
    const {cartItems} = useContext(CartContext);

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const ToggleSetIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const count = cartItems.reduce((accum, item) => accum + item.quantity, 0);


    return (
        <div className='cart-icon-container' onClick={ToggleSetIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{count}</span>
        </div>
    )
}