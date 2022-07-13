import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {UserContext} from '../../context/User.Context';
import {signOutUser} from '../../firebase/Firebase.Utils';

import '../../components/header-component/Header.scss';



export default function Header() {

    const {currentUser} = useContext(UserContext);
    console.log(currentUser);

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
                </div>
            </div>
        </Fragment>
    )
}
