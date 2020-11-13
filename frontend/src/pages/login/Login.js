import React from 'react';
import { TextInput, Button, Checkbox, PageBanner } from 'components';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { loginValidate } from 'services';
import axios from 'axios';

const Login = () => {

    const onSubmit = (values, actions) => {
        const userData = {
            identifier: values.login,
            password: values.password,
        }
        axios.post(`${process.env.REACT_APP_API_URL}/auth/local`, userData)
        .then(response => {
            if (response.status == 200) {
                alert('Login success');
                localStorage.setItem('user', JSON.stringify(response.data));
            }
        })
        .catch(error => {
            alert(`Login failed: ${error.response.data.message[0].messages[0].message}`);
        });
    }

    return (
        <div className="page login-page">
            <PageBanner>
                <h1>Login page</h1>
            </PageBanner>
            <div className="container">
                <div className="form-wrapper">
                    <Formik
                        initialValues={{
                            login: '',
                            password: '',
                        }}
                        onSubmit={onSubmit}
                        validationSchema={loginValidate}
                    >
                        {({ errors, touched }) => (
                            <Form className="form">
                                <div className="form-inputs">
                                    <TextInput name="login" placeholder="login" error={errors.login}/>
                                    <TextInput name="password" type="password" placeholder="password" error={errors.password}/>
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

export default Login;
