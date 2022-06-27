import React, {useState} from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import './SignInForm.scss';
import {
    signInWithGoogle,
    createUserProfileDocument, signInAuthUserWithEmailAndPassword
} from "../../firebase/Firebase.Utils";

export default function SignIn() {

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
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)

        } catch (error) {

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
                    <CustomButton onClick={logGoogleUser} buttonType={'google'}>
                        Sign in with Google
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}