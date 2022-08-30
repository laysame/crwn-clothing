import React, {useContext} from 'react';
import {CartContext} from "../../context/cart-context";
import {CartIconContainer, ItemCount, ShoppingCartIcon} from "./CartIcon-Styles";


const CartIcon = () => {
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

export default CartIcon;