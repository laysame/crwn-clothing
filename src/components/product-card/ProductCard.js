import React, {useContext} from 'react';
import './ProductCard.scss';
import CustomButton, {buttonTypeClasses} from "../custom-button/CustomButton";
import {CartContext} from "../../context/cart-context";

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>€{price}</span>
            </div>
            <CustomButton onClick={addProductToCart} buttonType={buttonTypeClasses.inverted}>ADD TO CARD</CustomButton>
        </div>
    )
};

export default ProductCard;
