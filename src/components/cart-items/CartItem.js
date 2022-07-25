import React, {useContext} from "react";
import './CartItem.scss';
import {CartContext} from "../../context/Cart.Context";

export default function CartItem({cartItem}) {

    const {name, price, imageUrl, quantity} = cartItem;


    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
                <h2 className='name'>{name}</h2>
                <span>{quantity}x</span>
                <span>€{price}</span>
            </div>
        </div>
    )
}