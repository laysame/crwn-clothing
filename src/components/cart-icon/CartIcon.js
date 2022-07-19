import React, {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {CartContext} from "../../context/Cart.Context";

import './CartIcon.scss';


export default function CartIcon() {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const ToggleSetIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={ToggleSetIsCartOpen}>
           <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}