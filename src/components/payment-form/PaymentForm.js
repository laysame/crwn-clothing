import React from "react";
import {
    CardElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import CustomButton, {buttonTypeClasses} from "../custom-button/CustomButton";
import {FormContainer, PaymentFormContainer} from "./PaymentForm-Styles";

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return; //exists the function
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({amount: 100}),
        }).then((res) => {
            return res.json();
        });

        console.log(response);
        const {paymentIntent: {client_secret}} = response;
        console.log(client_secret);
    }


    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement/>
                <CustomButton buttonType={buttonTypeClasses.inverted}>Pay now</CustomButton>
            </FormContainer>

        </PaymentFormContainer>
    )
}

export default PaymentForm;