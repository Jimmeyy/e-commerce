import React from 'react';
import axios from 'axios';
import { TextInput, Button, Checkbox, PageBanner } from 'components';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { registerValidate } from 'services';

const Register = () => {

    const onSubmit = (values, actions) => {
        const userData = {
            username: values.login,
            email: values.email,
            password: values.password,
        }
        axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`, userData)
        .then(response => {
            if (response.status == 200) {
                alert('Register success');
            }
        })
        .catch(error => {
            alert(`Register failed: ${error.response.data.message[0].messages[0].message}`);
        })
    }

    return (
        <div className="page register-page">
            <PageBanner>
                <h1>Register page</h1>
            </PageBanner>
            <div className="container">
                <div className="form-wrapper">
                    <Formik
                        initialValues={{
                            login: '',
                            email: '',
                            password: '',
                            repeatPassword: '',
                        }}
                        onSubmit={onSubmit}
                        validationSchema={registerValidate}
                    >
                        {({ errors, touched }) => (
                            <Form className="form">
                                <div className="form-inputs">
                                    <TextInput name="login" placeholder="login" error={errors.login}/>
                                    <TextInput name="email" placeholder="email" error={errors.email}/>
                                    <TextInput name="password" type="password" placeholder="password" error={errors.password}/>
                                    <TextInput name="repeatPassword" type="password" placeholder="repeat password" error={errors.repeatPassword}/>
                                </div>
                                <div className="form-buttons">
                                    <Button type="submit">Login</Button>
                                </div>
                                <div className="form-footer">
                                    <Checkbox label="Remember me" />
                                    <p className="form-footer-text">
                                        Forgot <Link to="/">password ?</Link>
                                    </p>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Register;
