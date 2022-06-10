import React, {useState} from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import '../../components/sign-in/SignIn.scss';
import {signInWithGoogle, createUserProfileDocument} from "../../firebase/Firebase.Utils";

export default function SignIn(props) {

    const [state, setState] = useState({email: '', password:''});

    function handleSubmit(event){
        event.preventDefault();
        setState({email: '', password: ''});
    }

    function handleChange(event) {

        const {value, name} = event.target;

        //setState({[name]: value});
    }

    async function logGoogleUser(){
        const {user} = await signInWithGoogle();
        const userRef = await createUserProfileDocument(user);

    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type='email' name='email' value={state.email} required
                           handleChange={handleChange} label='Email'/>

                <FormInput type='password' name='password' value={state.password} required
                           handleChange={handleChange} label='Password'/>

                <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={logGoogleUser} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}

/* Class component

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.props.onSignIn;
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} required
                               handleChange={this.handleChange} label='Email'/>

                    <FormInput type='password' name='password' value={this.state.password} required
                               handleChange={this.handleChange} label='Password'/>

                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={this.onSignIn} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
*/
// export default SignIn;