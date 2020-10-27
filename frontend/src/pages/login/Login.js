import React from 'react';
import { TextInput, Button, Checkbox, PageBanner } from 'components';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

const Login = () => {

    const onSubmit = (values, actions) => {
        console.log(values);
        console.log(actions);
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
                    >
                        <Form className="form">
                            <div className="form-inputs">
                                <TextInput name='login'  placeholder='login' />
                                <TextInput name='password' placeholder='password' />
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
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
