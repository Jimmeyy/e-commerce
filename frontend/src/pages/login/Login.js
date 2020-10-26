import React from 'react';
import { TextInput, Button, Checkbox } from 'components';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="page login-page">
            <div className="container">
                <h1>Login page</h1>
                <div className="form-wrapper">
                    <form action="" className="form">
                        <div className="form-inputs">
                            <TextInput placeholder={'Login'}/>
                            <TextInput type={'password'} placeholder={'Password'} />
                        </div>
                        <div className="form-buttons">
                            <Button>Login</Button>
                        </div>
                        <div className="form-footer">
                            {/* Password reminder link and remember me checkbox */}
                            <Checkbox label='Remember me' />
                            <p className="form-footer-text"> 
                                Forgot <Link to="/">password ?</Link> 
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;