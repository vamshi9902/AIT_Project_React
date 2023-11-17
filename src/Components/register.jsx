import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginbanner from '../Assets/images/login.png';
import userImg from '../Assets/images/user.png';

const Register = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userChangeHandler = (e) => {
    setUser(e.target.value);
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!user.trim() || !email.trim() || !password.trim()) {
      alert('Input field cannot be empty ‼️');
    } else {
      localStorage.setItem('user', user);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
  
      setUser('');
      setEmail('');
      setPassword('');
  
      navigate('/Login');
  
      alert('Registration Successful ✅');
    }
  };
  
  

  return (
    <div className='container form-container'>
      <form action="#" className='text-light login' onSubmit={submitHandler}>
        <img src={loginbanner} alt="LoginBanner" className='login-banner' />
        <div className="container login-text bg-warning p-5">
          <div className="row">
            <div className="col">
              <img src={userImg} alt="user" className='user' />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>Register</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" placeholder='User Name' className='p-2' onChange={userChangeHandler} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" placeholder='Email' className='p-2' onChange={emailChangeHandler} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" placeholder='Password' className='p-2' onChange={passwordChangeHandler} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type='submit' className="btn btn-dark" >Create Account</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Already have an account? <Link to='/Login' className='text-dark text-decoration-none' ><b>Login</b></Link></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
