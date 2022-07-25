import React, {useContext, useEffect} from "react";

import './CheckoutPage.scss';
import {CartContext} from "../../context/Cart.Context";
import CustomButton from "../../components/custom-button/CustomButton";


export default function CheckoutPage() {
    const {cartItems, addItemToCart, removeItemFromCart, total} = useContext(CartContext);

    return (
        <div>
            {
                cartItems.map((cartItem) => {
                    const {id, name, imageUrl, price, quantity} = cartItem;

                    return (
                        <div key={id}>
                            <img src={imageUrl} alt={name}/>
                            <h2>{name}</h2>
                            <span>Quantity: {quantity}</span>
                            <br/>
                            <span>Price: €{price}</span>
                            <CustomButton onClick={() => addItemToCart(cartItem)}>+</CustomButton>
                            <br/>
                            <CustomButton onClick={() => removeItemFromCart(cartItem)}>-</CustomButton>
                        </div>
                    )
                })
            }
            <div>
                <h3>Total: €{total}</h3>
            </div>
        </div>
    )
}