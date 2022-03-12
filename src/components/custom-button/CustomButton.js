import React from "react";

import '../../components/custom-button/CustomButton.scss';

export default function CustomButton({children, ...otherProps}) {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}