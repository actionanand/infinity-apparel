import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignInContainer, ButtonContainer, TitleContainer } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ onStartingEmailSignIn, onStartingGoogleSignIn }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    onStartingEmailSignIn(email, password);
  };

  const handleChange = event => {
    const {value, name} = event.target;
    setCredentials({
      ...userCredentials, 
      [name]: value 
    });
  };

  
  return (
    <SignInContainer>
      <TitleContainer> I already have an account </TitleContainer>
      <span> Sign in with your email and password </span>
      <form onSubmit={ handleSubmit }>
        <FormInput name='email' type='email' value={ email } required 
        handleChange={ handleChange } label='email' />
        <FormInput name='password' type='password' value={ password } required 
        handleChange={ handleChange } label='password' />
        <ButtonContainer>
          <CustomButton type='submit'> Sign In </CustomButton>
          <CustomButton type='button' onClick={ onStartingGoogleSignIn } isGoogleSignIn> Sign In with Google </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );

}

const mapDispatchToProps = dispatch => ({
  onStartingGoogleSignIn: () => dispatch(googleSignInStart()),
  onStartingEmailSignIn: (email, password) => dispatch(emailSignInStart({email, password}))
});  

export default connect(null, mapDispatchToProps)(SignIn);