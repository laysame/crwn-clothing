import React, {useContext} from 'react';
import './ProductCard.scss';
import CustomButton from "../custom-button/CustomButton";
import {CartContext} from "../../context/Cart.Context";

export default function ProductCard({product}) {

    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={addProductToCart} buttonType={'inverted'}>ADD TO CARD</CustomButton>
        </div>
    )
}