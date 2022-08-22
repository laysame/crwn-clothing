import React, {useContext} from 'react';

import {CartContext} from "../../context/Cart.Context";

import {CartIconContainer, ItemCount, ShoppingCartIcon} from "./CartIcon-Styles";


export default function CartIcon() {
    const {cartCount} = useContext(CartContext);

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const ToggleSetIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={ToggleSetIsCartOpen}>
            <ShoppingCartIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}