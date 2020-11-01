import React from 'react';
import { TextInput, Button, Checkbox, PageBanner } from 'components';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { registerValidate } from 'services';

const Register = () => {

    const onSubmit = (values, actions) => {
        console.log(values);
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
                                    <TextInput name="password" placeholder="password" error={errors.password}/>
                                    <TextInput name="repeatPassword" placeholder="repeat password" error={errors.repeatPassword}/>
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
