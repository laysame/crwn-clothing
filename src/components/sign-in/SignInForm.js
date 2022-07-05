import React, {useState, useContext} from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
    signInWithGoogle,
    createUserProfileDocument, signInAuthUserWithEmailAndPassword
} from '../../firebase/Firebase.Utils';
import {UserContext} from '../../context/User.Context';

import './SignInForm.scss';

export default function SignInForm() {

    const {setCurrentUser} = useContext(UserContext);

    const defaultFormFields = {
        email: '', password: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    function resetFormFields() {
        setFormFields(defaultFormFields);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user); //whenever the user value comes back (method from context)

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

    function handleChange(event) {

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    async function logGoogleUser() {
        const {user} = await signInWithGoogle();
        const userRef = await createUserProfileDocument(user);
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" required={true} onChange={handleChange} name="email" value={email}
                           label={'Email'}/>

                <FormInput type="password" required={true} onChange={handleChange} name="password" value={password}
                           label={'Password'}/>

                <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={logGoogleUser} buttonType={'google'}>
                        Sign in with Google
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}