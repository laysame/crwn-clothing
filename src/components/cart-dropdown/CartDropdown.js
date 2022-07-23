import React, {useContext} from 'react';
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-items/CartItem";

import './CartDropdown.scss';
import {CartContext} from "../../context/Cart.Context";

export default function CartDropdown() {
    const {cartItems} = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}