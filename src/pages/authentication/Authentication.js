import React from 'react';
import './Authentication.scss';
import SignUpForm from '../../components/sign-up/SignUpForm';
import SignInForm from '../../components/sign-in/SignInForm';

export default function Authentication() {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
