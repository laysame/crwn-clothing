import React from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
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

    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment:</h2>
                <CardElement/>
                <CustomButton buttonType={buttonTypeClasses.inverted}>Pay now</CustomButton>
            </FormContainer>

        </PaymentFormContainer>
    )
}

export default PaymentForm;