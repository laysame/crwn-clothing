import React, {Fragment, useContext} from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {UserContext} from '../../context/User.Context';
import {CartContext} from "../../context/Cart.Context";
import {signOutUser} from '../../firebase/Firebase.Utils';
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import {HeaderContainer, LogoContainer, NavLinks, NavLink} from "./Header-Styles";

export default function Header() {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <HeaderContainer>

                <LogoContainer to='/'>
                    <Logo />
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ?
                        <NavLink onClick={signOutUser}>
                            SIGN OUT
                        </NavLink> :
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>}
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </HeaderContainer>
        </Fragment>


    )
}

// check the truthiness and returns the last one (the component which will always be true because it is a function )
// {isCartOpen && <CartDropdown/>}
