import React, { useContext, useState } from 'react';
import { createUserData, createUserWithEmailPassword } from '../../Utils/Firebase/Firebase.utils';
import FormInput from '../Form-input/Form-input.coponent';
import './signup.styles.scss';
import Button from '../Buttons/Buttons.components';
// import { userContext } from '../../Contexts/User.context';
const defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Signup() {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // const {setUserName}= useContext(userContext)
  const resetForm=()=>{
      setFormFields(defaultFields);
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const {user} = await createUserWithEmailPassword(email, password);
      console.log(user);
      // setUserName(user);
      console.log(displayName);
      
      await createUserData(user, {displayName});
      resetForm();

    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
            console.log('Cannot create the account, Email already exists');
      }
      console.error('Error creating user:', error);
    }
  };

  const handleOnChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='signup-container'>
      <h2>Don't Have an Account?</h2>
      <span>Signup with Email and Password</span>
      <form onSubmit={handleSubmit}>
      <FormInput
          label="Display Name"
            type='text'
            required
            onChange={handleOnChange}
            name='displayName'
            value={displayName}
      />

       <FormInput
          label="Email"
            type='email'
            required
            onChange={handleOnChange}
            name='email'
            value={email}
      />
       <FormInput
          label="Password"
            type='password'
            required
            onChange={handleOnChange}
            name='password'
            value={password}
      />
      <FormInput
            label="Confirm Password"
            type='password'
            required
            onChange={handleOnChange}
            name='confirmPassword'
            value={confirmPassword}
      />
        <Button 
            buttontype='inverted'
            type="submit"      
      >Signup</Button>
      </form>
    </div>
  );
}
