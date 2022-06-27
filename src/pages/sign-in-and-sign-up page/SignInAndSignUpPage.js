import React from 'react';
import SignIn from '../../components/sign-in/SignInForm';

import './SignIn-SignUp.scss';
import SignUpForm from "../../components/sign-up/SignUpForm";

export default function SignInAndSignUpPage({onSignIn}) {
    return (
        <div>
            <SignIn onSignIn={onSignIn} />
            <SignUpForm />
        </div>
    )
}
