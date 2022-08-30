import React, {Fragment, useContext} from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {UserContext} from '../../context/user-context';
import {CartContext} from "../../context/cart-context";
import {signOutUser} from '../../utils/firebase/firabase-utils';
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import {HeaderContainer, LogoContainer, NavLinks, NavLink} from "./Header-Styles";


const Header = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>

            <HeaderContainer>
                <LogoContainer to='/'>
                    <Logo/>
                </LogoContainer>
                <NavLinks>
                    {currentUser ?
                        <NavLinks>
                            <NavLink to='/shop'>
                                SHOP
                            </NavLink>
                            <NavLink to={'/orders'}>
                                ORDERS
                            </NavLink>
                            <NavLink as='span' onClick={signOutUser}>
                                SIGN OUT
                            </NavLink>

                        </NavLinks>
                        :
                        <NavLinks>
                            <NavLink to='/shop'>
                                SHOP
                            </NavLink>
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        </NavLinks>
                    }
                    <CartIcon/>
                </NavLinks>

                {isCartOpen && <CartDropdown/>}

            </HeaderContainer>
        </Fragment>
    )
};

export default Header;

// check the truthiness and returns the last one (the component which will always be true because it is a function )
// {isCartOpen && <CartDropdown/>}
