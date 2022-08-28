import React from "react";
import {BaseButton, GoogleSignInButton, InvertedButton} from "./CustomButton-Styles";

export const buttonTypeClasses = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
};

// default button class is buttonTypeClasses.base
const getButton = (buttonType = buttonTypeClasses.base) => (
    {
        [buttonTypeClasses.base]: BaseButton,
        [buttonTypeClasses.google]: GoogleSignInButton,
        [buttonTypeClasses.inverted]: InvertedButton
    }[buttonType]
)

const CustomButton = ({children, buttonType, ...otherProps}) => {
    const Button = getButton(buttonType);
    return (
        <Button {...otherProps}>
            {children}
        </Button>
    )
};

export default CustomButton;