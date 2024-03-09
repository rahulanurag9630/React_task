import React, { useState } from 'react'
import InputField from '../components/InputField'
import { Container } from '@mui/material'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'

import { useFormik } from 'formik';
import Button from '../components/ColorButtons';
import { Validate_Form } from '../schemas';
import { Link } from 'react-router-dom';




const initialValues = {
  email: '',
  confirm_password: ''
}
function SignIn() {
  const [touchedFields, setTouchedFields] = useState({});


  const { values, errors, handleBlur, handleChange, touched, handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: Validate_Form,
    onSubmit: (values, action) => {
      // Retrieve email and confirm_password from local storage
      
      console.log(values);
      console.log('button is clicked');
      action.resetForm();
      console.log(errors);
    }
  });
  const match = ()=>{
    const storedEmail = localStorage.getItem('email');
      const storedConfirmPassword = localStorage.getItem('confirm_password');

      // Check if the submitted email and password match the stored values
      if (values.email === storedEmail && values.confirm_password === storedConfirmPassword) {
        console.log('Email and password match stored values.');

        // Perform further actions if the email and password match
      } else {
        console.log('Email and/or password do not match stored values.');
        console.log(storedEmail,storedConfirmPassword);
        console.log(values.email,values.confirm_password);
      }


  }
  const handleBlur1 = (fieldName) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [fieldName]: true,
    }));
  };

  return (
    <div>
      <Container style={{ border: '1px solid black', borderRadius: '15px', }}>
        <InputField
          label={'Email'}
          type={'email'}
          placeholder={'Enter your email'}
          value={values.email}
          onChange={handleChange}
          click={() => handleBlur1('email')}
          icon={<AiOutlineMail />}
          name={'email'}
          id={'email'}
          error={touchedFields.email ? errors.email : ''}
        ></InputField>
        <InputField
          label={'Password'}
          type={'password'}
          placeholder={'Enter your password'}

          value={values.confirm_password}
          onChange={handleChange}
          click={() => handleBlur1('confirm_password')}
          icon={<AiFillLock />}
          name={'confirm_password'}
          id={'confirm_password'}
          error={touchedFields.password ? errors.password : ''}
        ></InputField>
        <Button btn_name={'Submit'} type={'submit'} color={'success'} click={match} />

        <h4>If you don't have an account <Link to={'/'}>Click Here</Link></h4>

      </Container>
    </div>
  )
}

export default SignIn
