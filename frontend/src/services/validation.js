import * as Yup from 'yup';

export const loginValidate = Yup.object().shape({
    login: Yup.string()
    .min(3, 'Login is to short')
    .required('This field is required'),
    password: Yup.string()
    .min(3, 'Password is to short')
    .required('This field is required'),
});

export const registerValidate = Yup.object().shape({
    login: Yup.string()
    .min(3, 'Login is to short')
    .required('This field is required'),
    email: Yup.string().email('Invaild email format').required('This field is required'),
    password: Yup.string()
    .min(3, 'Password is to short')
    .required('This field is required'),
    repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('This field is required')
});


