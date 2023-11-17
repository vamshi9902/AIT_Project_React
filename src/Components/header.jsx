import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaX } from 'react-icons/fa6';
import logo from '../Assets/images/logo.png';
import '../Header.css';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const loggedUser = localStorage.getItem('user');

  useEffect(() => {
    setShowLinks(location.pathname !== '/Login');
  }, [location.pathname]);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/Login');
    alert('Logout Successful ✔️');
  };

  return (
    <nav className="p-3 mb-5">
      <div className="header">
        <img src={logo} alt="" width={200} />
      </div>
      <ul className={`links ${showLinks ? 'show' : ''}`}>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Tours'>Tours</Link></li>
        {loggedUser && showLinks ? (
          <>
            <li><button className="btn btn-primary rounded-5"><Link to='/User'>{loggedUser}</Link></button></li>
            <li><button onClick={handleLogout} className="btn btn-danger rounded-5">Logout</button></li>
          </>
        ) : (
          <>
            <li><button className='btn btn-warning rounded-5'><Link to='/Login' className='text-white'>Login</Link></button></li>
            <li><button className='btn btn-warning rounded-5'><Link to='/Register' className='text-white'>Register</Link></button></li>
          </>
        )}
      </ul>
      <div className="side-bars">
        <span>
          {showLinks ? (
            <button id="btn" onClick={handleToggle}><FaX /></button>
          ) : (
            <button id="btn" onClick={handleToggle}><FaBars /></button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Header;
