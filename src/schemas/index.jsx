import * as Yup from 'yup';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const Validate_Form = Yup.object({
  fname: Yup
    
    .string()
    .matches(/^[a-zA-Z]+$/, 'Name should only contain characters')
    .min(3, 'First name should be at least 3 characters')
    .max(40)
    .required("Please enter your name"),
  lname: Yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Last name should only contain characters')
    .required('Last name is required')
    .min(3, 'Last name should be at least 3 characters'),
  email: Yup
    .string()
    .matches(emailRegex, 'Invalid email address')
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup
    .string()
    .matches(/^[789]\d{9}$/, 'Invalid indian phone no')
    .required('Phone no is required'),
  address: Yup
    .string()
    .required("Address field can't be empty"),
  password: Yup
    .string()
    .required('Password is required')
    .min(6, 'Password should be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
  confirm_password: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
    .required('Password is required')
    .min(6, 'Password should be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
  image: Yup.mixed().test(
    'isImage',
    'Only image files are allowed',
    (value) => {
      if (!value) {
        return true; // If the field is empty, consider it valid
      }

      // Check if the value is a File object
      if (value instanceof File || (value.blob && value.blob instanceof Blob)) {
        // Check the file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Add more if needed
        return allowedTypes.includes(value.type);
      }

      return false;
    }
  ),

});