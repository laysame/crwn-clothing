import React from "react";
import './CartItem-Styles';
import {CartItemContainer, ItemDetails} from "./CartItem-Styles";

const CartItem = ({cartItem}) => {

    const {name, price, imageUrl, quantity} = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <h2>{name}</h2>
                <span>{quantity}x</span>
                <span>€{price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;