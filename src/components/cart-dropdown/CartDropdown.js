import React, {useContext} from 'react';
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-items/CartItem";

import './CartDropdown.scss';
import {CartContext} from "../../context/Cart.Context";

import {Link} from "react-router-dom";

export default function CartDropdown() {
    const {cartItems} = useContext(CartContext);
    const {cartTotal} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <div>
                <h3>Total: €{cartTotal}</h3>
            </div>
            <Link to='/checkout'>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </Link>

        </div>
    )
}