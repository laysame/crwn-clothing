import React, {useContext} from "react";
import {CartContext} from "../../context/cart-context";
import CartItem from "../cart-items/CartItem";

const Orders = () => {
    const {cartItems} = useContext(CartContext);

    return (
        <div>
            <h2>ORDER SUMMARY</h2>
            {
                cartItems.map(item =>
                    <CartItem key={item.id} cartItem={item}/>)
            }
        </div>
    )
};

export default Orders;