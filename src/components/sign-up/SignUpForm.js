import React, {useState} from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserProfileDocument,
} from '../../utils/firebase/firabase-utils';
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import "./SignUpForm.scss";

const SignUpForm = () => {

    const defaultFormFields = {
        displayName: '', email: '', password: '', confirmPassword: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password does not match");
            return; //exits the function
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('Error creating user:', error.message);
            }
        }
    }

    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput type="text" required={true} onChange={handleChange} name="displayName" value={displayName}
                           label={'Display Name'}/>

                <FormInput type="email" required={true} onChange={handleChange} name="email" value={email}
                           label={'Email'}/>

                <FormInput type="password" required={true} onChange={handleChange} name="password" value={password}
                           label={'Password'}/>

                <FormInput type="password" required={true} onChange={handleChange} name="confirmPassword"
                           value={confirmPassword} label={'Confirm Password'}/>

                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>)
};

export default SignUpForm;