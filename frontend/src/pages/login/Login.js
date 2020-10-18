import React from 'react';
import { TextInput, Button } from 'components';

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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;