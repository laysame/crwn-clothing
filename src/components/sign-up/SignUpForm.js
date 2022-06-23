import React, {useState} from "react";

import "./SignUpForm.scss";
import {
    createAuthUserWithEmailAndPassword,
    createUserProfileDocument,
} from "../../firebase/Firebase.Utils";


export default function SignUpForm() {

    const defaultFormFields = {
        displayName: '', email: '', password: '', confirmPassword: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields)

    function resetFormFields() {
        setFormFields(defaultFormFields);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password does not match");
            return; //exits
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            resetFormFields();
        } catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('Error creating user:', error.message);
            }
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (<div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
            <label>Display Name</label>
            <input type="text" required={true} onChange={handleChange} name="displayName" value={displayName}/>

            <label>Email</label>
            <input type="email" required={true} onChange={handleChange} name="email" value={email}/>

            <label>Password</label>
            <input type="password" required={true} onChange={handleChange} name="password" value={password}/>

            <label>Confirm Password</label>
            <input type="password" required={true} onChange={handleChange} name="confirmPassword"
                   value={confirmPassword}/>

            <button type="submit">Sign Up</button>
        </form>
    </div>)
}