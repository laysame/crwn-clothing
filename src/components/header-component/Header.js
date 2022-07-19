import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {UserContext} from '../../context/User.Context';
import {signOutUser} from '../../firebase/Firebase.Utils';
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {CartContext} from "../../context/Cart.Context";

import '../../components/header-component/Header.scss';

export default function Header() {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <div className='header'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='links-container'>
                    <Link className='option' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='option' to='/contact'>
                        CONTACT
                    </Link>
                    {currentUser ?
                        <div className='option' onClick={signOutUser}>
                            SIGN OUT
                        </div> :
                        <Link className='option' to='/auth'>
                            SIGN IN
                        </Link>}
                    <CartIcon />
                </div>
                    {isCartOpen && <CartDropdown/>}
            </div>
        </Fragment>
    )
}

// check the truthiness and returns the last one (the component which will always be true because it is a function )
// {isCartOpen && <CartDropdown/>}
