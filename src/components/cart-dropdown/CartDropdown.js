import React, {useContext} from 'react';
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-items/CartItem";

import {CartContext} from "../../context/Cart.Context";

import {Link} from "react-router-dom";

import {CartDropdownContainer, CartItems, EmptyMessage, ShowTotal} from "./CartDropdown-Styles.js";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const {cartTotal} = useContext(CartContext);

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item =>
                            <CartItem key={item.id} cartItem={item}/>
                        ))
                        : (<EmptyMessage> Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <ShowTotal>
                Subtotal: €{cartTotal}
            </ShowTotal>
            <Link to='/checkout'>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </Link>

        </CartDropdownContainer>
    )
}
export default CartDropdown;