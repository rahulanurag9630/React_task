import React, { useState } from 'react'
import Container from '@mui/material/Container'
import InputField from './InputField'
import { AiOutlineMail, AiFillLock, AiOutlineUser, AiOutlinePhone, } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa';
import Button from './ColorButtons';
import { useFormik } from 'formik';
import img from '../assets/images/pngwing.png'
import { Validate_Form } from '../schemas';

const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirm_password: "",
    image: null,

}

function FormContainer() {
    const [imagePreview, setImagePreview] = useState(null);
    const [touchedFields, setTouchedFields] = useState({});


    const { values, errors, handleBlur, handleChange,touched, handleSubmit,resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema:Validate_Form,
        onSubmit: (values,action) => {
            console.log(values);
            console.log('button is clicked');
            action.resetForm();
        }
    });
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // You can set a preview of the image if needed
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);

            // Set the image file in the form values
            values.image = file;
        }
    };
    
    const handleBlur1 = (fieldName) => {
        setTouchedFields((prevTouchedFields) => ({
          ...prevTouchedFields,
          [fieldName]: true,
        }));
      };
    return (
        <div>
            <Container style={{ border: '1px solid black', borderRadius: '15px', }}>
                <form action="" onSubmit={handleSubmit} >
                    <img src={img} alt="" height={'100vh'} style={{ marginTop: '10px' }} />
                    <InputField
                        label={'First Name'}
                        type={'text'}
                        value={values.fname}
                        onChange={handleChange}
                      click={() => handleBlur1('fname')}
                      
                        icon={<AiOutlineUser />}
                        name={'fname'}
                        id={'fname'}
                        error={touchedFields.fname ? errors.fname : ''}
                    ></InputField>
                    <InputField
                        label={'Last Name'}
                        type={'text'}
                        value={values.lname}
                        onChange={handleChange}
                        click={() => handleBlur1('lname')}
                        icon={<AiOutlineUser />}
                        name={'lname'}
                        id={'lname'}
                        error={touchedFields.lname ? errors.lname : ''}
                    ></InputField>
                    <InputField
                        label={'Email'}
                        type={'email'}
                        value={values.email}
                        onChange={handleChange}
                        click={() => handleBlur1('email')}
                        icon={<AiOutlineMail />}
                        name={'email'}
                        id={'email'}
                        error={touchedFields.email ? errors.email : ''}
                    ></InputField>
                    <InputField
                        label={'Phone no'}
                        type={'tel'}
                        value={values.phone}
                        onChange={handleChange}
                        click={() => handleBlur1('phone')}
                        icon={<AiOutlinePhone />}
                        name={'phone'}
                        id={'phone'}
                        error={touchedFields.phone ? errors.phone : ''}
                    ></InputField>
                    <InputField
                        label={'Address'}
                        type={'text'}
                        value={values.address}
                        onChange={handleChange}
                        click={() => handleBlur1('address')}
                        icon={<FaMapMarkerAlt />}
                        name={'address'}
                        id={'address'}
                        error={touchedFields.address ? errors.address : ''}
                    ></InputField>
                    <InputField
                        label={'Password'}
                        type={'password'}
                        value={values.password}
                        onChange={handleChange}
                        click={() => handleBlur1('password')}
                        icon={<AiFillLock />}
                        name={'password'}
                        id={'password'}
                        error={touchedFields.password ? errors.password : ''}
                    ></InputField>
                    <InputField
                        label={'Confirm Password'}
                        type={'password'}
                        onChange={handleChange}
                        click={() => handleBlur1('confirm_password')}
                        value={values.confirm_password}
                        icon={<AiFillLock />}
                        name={'confirm_password'}
                        id={'confirm_password'}
                        error={touchedFields.confirm_password ? errors.confirm_password : ''}
                    ></InputField>
                    <InputField
                        label={'Image'}
                        type={'file'}
                        onChange={handleImageChange}
                        click={() => handleBlur1('image')}
                        
                        icon={<img src={imagePreview} alt="Preview" height="24px" />}
                        name={'image'}
                        id={'image'}
                        error={touchedFields.image ? errors.image : ''}
                    />
                    <Button btn_name={'Submit'} type={'submit'} color={'success'} submit={handleSubmit} />
                    <Button btn_name={'Reset'} type={'reset'} color={'warning'} click={resetForm} />
                </form>

            </Container>
        </div>
    )
}

export default FormContainer
