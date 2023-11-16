import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginbanner from '../Assets/images/login.png';
import user from '../Assets/images/user.png';

const Login = () => {
    const navigate = useNavigate();
    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const storedUser = localStorage.getItem('user');

    const emailHandler = (e) => {
        setLogEmail(e.target.value);
    };

    const passwordHandler = (e) => {
        setLogPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert('Input fields cannot be empty ‼️');
        } else if ((email !== logEmail || password !== logPassword) && storedUser !== logEmail) {
            alert('Invalid Email or Password');
        } else {
            localStorage.setItem('user', storedUser);
            navigate('/Home');
            alert('Login Successful ✅');
        }
    };

    return (
        <div className='container form-container'>
            <form className='text-light login' onSubmit={submitHandler}>
                <img src={loginbanner} alt="LoginBanner" className='login-banner' />
                <div className="container login-text bg-warning p-5">
                    <div className="row">
                        <div className="col">
                            <img src={user} alt="user" className='user' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1>Login</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" placeholder='Email' className='p-2' onChange={emailHandler} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="password" placeholder='Password' className='p-2' onChange={passwordHandler} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-dark">Login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Don't have an account? <Link to='/Register' className='text-dark text-decoration-none'><b>Register</b></Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
