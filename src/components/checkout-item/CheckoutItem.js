import React, {useContext} from "react";

import './CheckoutItem.scss';
import {CartContext} from "../../context/Cart.Context";

export default function CheckoutItem({cartItem}) {

    const {addItemToCart, removeItemFromCart, removeItemFromCheckout} = useContext(CartContext);

    function increaseQuantityHandler() {
        addItemToCart(cartItem)
    }

    function decreaseQuantityHandler() {
        removeItemFromCart(cartItem)
    }

    function removeItemFromCheckoutHandler() {
        removeItemFromCheckout(cartItem);
    }

    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decreaseQuantityHandler}>
                    &#10094;
                </div>
               <span className='value'>{quantity}</span>
                <div className='arrow' onClick={increaseQuantityHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeItemFromCheckoutHandler}>
                &#10005;
            </div>
        </div>
    )
}