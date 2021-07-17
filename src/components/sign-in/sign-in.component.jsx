import React from 'react';

import { SignInContainer, ButtonContainer, TitleContainer } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.log('Unable to sign in by email and password, ', error.message);
    }

  };

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <TitleContainer> I already have an account </TitleContainer>
        <span> Sign in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} required 
          handleChange={this.handleChange} label='email' />
          <FormInput name='password' type='password' value={this.state.password} required 
          handleChange={this.handleChange} label='password' />
          <ButtonContainer>
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
          </ButtonContainer>
        </form>
      </SignInContainer>
    );
  };

}

export default SignIn;