import React, {useContext, useState} from "react";
import {
    CardCvcElement,
    CardExpiryElement, CardNumberElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import CustomButton, {buttonTypeClasses} from "../custom-button/CustomButton";
import {PaymentFormContainer} from "./PaymentForm-Styles";
import {UserContext} from "../../context/user-context";
import {CartContext} from "../../context/cart-context";
import {faCircleCheck, faCircleXmark, faCreditCard} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './fontawesome-styles.scss';
import {Form} from "react-bootstrap";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {currentUser} = useContext(UserContext);
    const {cartTotal} = useContext(CartContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [paymentFailed, setPaymentFailed] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({amount: cartTotal * 100}),
        }).then((res) => {
            return res.json();
        });

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            setPaymentFailed(true);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                setPaymentSuccessful(true);
            }
        }
    };

 if (paymentSuccessful) {
        return (
            <PaymentFormContainer>
                <FontAwesomeIcon icon={faCircleCheck} className='checked'/>
                <h2>Payment Successful !</h2>
                <p>Your order ...</p>
            </PaymentFormContainer>
        )
    } else if (paymentFailed) {
        return (<PaymentFormContainer>
            <FontAwesomeIcon icon={faCircleXmark} className='failed'/>
            <h2>Oops! Payment Failed !</h2>
            <p>Payment could not be proceed. Try again </p>
        </PaymentFormContainer>)
    } else {
        return (
            <PaymentFormContainer>
                    <Form onSubmit={paymentHandler} >
                        <h3><FontAwesomeIcon icon={faCreditCard} className={'card'}/> Credit Card Payment</h3>
                        <Form.Label className="mt-2">Card Number</Form.Label>
                        <CardNumberElement/>
                        <Form.Label className="mt-2">Expiration Date</Form.Label>
                        <CardExpiryElement/>
                        <Form.Label className="mt-2">Security Code</Form.Label>
                        <CardCvcElement/>

                        <CustomButton
                            buttonType={buttonTypeClasses.base} isLoading={isProcessingPayment}>
                            Pay now
                        </CustomButton>
                    </Form>
            </PaymentFormContainer>
        )
    }
}

export default PaymentForm;