import React from "react";

import '../../components/custom-button/CustomButton.scss';

const buttonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

export default function CustomButton({children, buttonType, ...otherProps}) {
    return (
        <button className={`button-container ${buttonTypeClasses[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}