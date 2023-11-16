import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";
import logo from '../Assets/images/logo.png';
import '../Header.css';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);
    const navigate = useNavigate();
    const [loggedUser, setLoggedUser] = useState(localStorage.getItem('user'));

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };

    const handleLogout = () => {
        setLoggedUser('');
        localStorage.removeItem('user');
        navigate('/Login');
        alert('Logout Successful ✔️');
    };

    return (
        <nav className="p-3 mb-4">
            <div className="header">
                <img src={logo} alt="" width={200} />
            </div>
            <ul className={`links ${showLinks ? "show" : ""}`}>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Tours'>Tours</Link></li>
                {loggedUser ? (
                    <>
                        <li><button type="button" className="btn btn-primary rounded-5 px-4"><Link to='/User' className="text-white">{loggedUser}</Link></button></li>
                        <li><button onClick={handleLogout} className="btn btn-danger rounded-5 px-4">Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to='/Login'>Login</Link></li>
                        <li><Link to='/Register'><button className="btn btn-warning text-white rounded-5">Register</button></Link></li>
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
}

export default Header;
