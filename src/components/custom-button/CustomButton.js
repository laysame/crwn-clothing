import React from "react";
import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    LoadingSpinner,
} from "./CustomButton-Styles";

export const buttonTypeClasses = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
    paymentSuccessful: 'PaymentSuccessful'
};

// default button class is buttonTypeClasses.base
const getButton = (buttonType = buttonTypeClasses.base) => (
    {
        [buttonTypeClasses.base]: BaseButton,
        [buttonTypeClasses.google]: GoogleSignInButton,
        [buttonTypeClasses.inverted]: InvertedButton,
    }[buttonType]
)

const CustomButton = ({children, isLoading = false, buttonType, ...otherProps}) => {
    const Button = getButton(buttonType);
    return (

        <Button disabled={isLoading} {...otherProps}>
            {isLoading ? <LoadingSpinner/> : children}
        </Button>
    )
};

export default CustomButton;