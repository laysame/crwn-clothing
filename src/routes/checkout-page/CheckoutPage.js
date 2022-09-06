import React, {useContext} from "react";
import './CheckoutPage-Styles';
import {CartContext} from "../../context/cart-context";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
    ButtonContainer,
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    ShopNowContainer,
    Total
} from "./CheckoutPage-Styles";
import CustomButton from "../../components/custom-button/CustomButton";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";


const CheckoutPage = () => {
    const {cartItems, cartTotal} = useContext(CartContext);


    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}

            {cartTotal !== 0 ?
                <ButtonContainer>
                    <Total>Total: €{cartTotal} </Total>
                    <Link to='/payment'>
                        <CustomButton>GO TO PAYMENT</CustomButton>
                    </Link>
                </ButtonContainer>

                : <ShopNowContainer>
                    <span>You haven't select anything yet!</span>
                    <span>
                        <Link to={'/shop'}>Shop Now <FontAwesomeIcon
                                  icon={faBagShopping}/>
                        </Link>
                    </span>
                </ShopNowContainer>
            }
        </CheckoutContainer>
    )
};

export default CheckoutPage;