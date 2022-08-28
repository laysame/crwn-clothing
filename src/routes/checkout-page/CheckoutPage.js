import React, {useContext} from "react";

import './CheckoutPage-Styles';
import {CartContext} from "../../context/Cart.Context";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import PaymentForm from "../../components/payment-form/PaymentForm";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./CheckoutPage-Styles";


const CheckoutPage = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <Total>Total: €{cartTotal}</Total>
            <PaymentForm/>
        </CheckoutContainer>
    )
};

export default CheckoutPage;