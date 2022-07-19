import React from 'react';
import './ProductCard.scss';
import CustomButton from "../custom-button/CustomButton";

export default function ProductCard({ product }) {

    const {name, price, imageUrl} = product;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton buttonType={'inverted'}>ADD TO CARD</CustomButton>
        </div>
    )
}