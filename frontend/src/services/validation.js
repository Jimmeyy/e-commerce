import * as Yup from 'yup';

export const loginValidate = Yup.object().shape({
    login: Yup.string()
    .min(3, 'Login is to short')
    .required('This field is required'),
    password: Yup.string()
    .min(3, 'Password is to short')
    .required('This field is required'),
})
