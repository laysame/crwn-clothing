import React, {useState} from "react";
import FormInput from "../form-input/FormInput";
import CustomButton, {buttonTypeClasses} from "../custom-button/CustomButton";
import {
    signInAuthUserWithEmailAndPassword, signInWithGooglePopup
} from '../../utils/firebase/firabase-utils';

import './SignInForm-Styles';
import {Buttons, SignInContainer} from "./SignInForm-Styles";

const SignInForm = () => {

    const defaultFormFields = {
        email: '', password: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password to this email')
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" required={true} onChange={handleChange} name="email" value={email}
                           label={'Email'}/>

                <FormInput type="password" required={true} onChange={handleChange} name="password" value={password}
                           label={'Password'}/>

                <Buttons>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} buttonType={buttonTypeClasses.google}>
                        Sign in with Google
                    </CustomButton>
                </Buttons>

            </form>
        </SignInContainer>
    )
};

export default SignInForm;