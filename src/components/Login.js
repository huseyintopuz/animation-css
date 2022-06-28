import React from 'react';
import '../components/styles/login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className='spinner'><input className="user" type="text" name="uname" placeholder="Login" required />
                <span className="focus-border">
                    <i></i>
                </span>
            </div>
            <div className='spinner'>
                <input className="password" type="password" name="pass" placeholder="Password" required />
                <span className="focus-border">
                    <i></i>
                </span>
            </div>
        </div>
    )
}

export default Login