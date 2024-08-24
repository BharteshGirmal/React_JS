import React, { useContext, useState } from 'react';
import { signInPopup, SignInUserWithEmailPassword, createUserData } from '../../Utils/Firebase/Firebase.utils';
import FormInput from '../Form-input/Form-input.coponent';
import './sign-in.styles.scss'
import { userContext } from '../../Contexts/User.context';
import Button from '../Buttons/Buttons.components';
// import { signInWithEmailAndPassword } from 'firebase/auth';
const defaultFields = {
  email: '',
  password: '',
};

export default function Signin() {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
  const { setUserName } = useContext(userContext);
  // const {userName} = useContext(userContext);
  const resetForm = () => {
    setFormFields(defaultFields);
  }

  const logUserData = async () => {
    await signInPopup();
    // setUserName(user);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const { user } = await SignInUserWithEmailPassword(email, password);
      console.log(user);
      // uncomment if want to use context hook instead of observer listener
      // setUserName(user);
      // await createUserData(user, {displayName});
      resetForm();

    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Entered Password is wrong');
      }
      if (error.code === 'auth/user-not-found') {
        alert('Invalid Email Id');
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
      <h2>Already Have an Account?</h2>
      <span>Signin with Email and Password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button
            buttontype='inverted'
            type="submit"
          >Sign In
          </Button>
          <Button
            buttontype='google'
            type="button"
            onClick={logUserData}
          >Google Sign
          </Button>
        </div>
      </form>
    </div>
  );
}
