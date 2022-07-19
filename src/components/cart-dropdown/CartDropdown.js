import React from 'react';

import './CartDropdown.scss';
import CustomButton from "../custom-button/CustomButton";

export default function CartDropdown() {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <CustomButton buttonType='inverted'>GO TO CHECKOUT</CustomButton>
        </div>
    )
}