import React, {useContext} from 'react';
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-items/CartItem";

import './CartDropdown.scss';
import {CartContext} from "../../context/Cart.Context";

import {Link} from "react-router-dom";

export default function CartDropdown() {
    const {cartItems} = useContext(CartContext);
    const {total} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>

            <Link to='/checkout'>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </Link>
            <div>
                <h3>Total: €{total}</h3>
            </div>
        </div>
    )
}