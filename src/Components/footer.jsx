import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/images/logo.png';
import { FaUserGear, FaGithub, FaLinkedinIn, FaInstagram, FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

function Footer() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row mb-4">
                <div className="col">
                    <ul style={{ listStyle: "none" }}>
                        <li className='mb-4'><img src={logo} alt="logo" className='w-50' /></li>
                        <li className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, commodi.</li>
                        <li className='d-flex'>
                            <li className='pe-3'><FaUserGear /></li>
                            <li className='pe-3'><FaGithub /></li>
                            <li className='pe-3'><FaLinkedinIn /></li>
                            <li className='pe-3'><FaInstagram /></li>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <ul style={{ listStyle: "none" }}>
                        <li className='mb-4'><b>Discover</b></li>
                        <li><Link to='/Home' className="nav-link mb-3">Home</Link></li>
                        <li><Link to='/About' className="nav-link mb-3">About</Link></li>
                        <li><Link to='/Tours' className="nav-link mb-3">Tours</Link></li>
                    </ul>
                </div>
                <div className="col">
                <ul style={{ listStyle: "none" }}>
                        <li className='mb-4'><b>Discover</b></li>
                        <li><Link to='/Gallery' className="nav-link mb-3">Gallery</Link></li>
                        <li><Link to='/Login' className="nav-link mb-3">Login</Link></li>
                        <li><Link to='/Register' className="nav-link mb-3">Register</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <ul style={{ listStyle: "none" }}>
                        <li className='mb-4'><b>Contact</b></li>
                        <li className='mb-3'><FaLocationDot className='text-warning' /> <b>Address: </b> Bengaluru, Karnataka</li>
                        <li className='mb-3'><FaEnvelope className='text-warning' /> <b>Email: </b> vamshikrishna9902@gmail.com</li>
                        <li className='mb-3'><FaPhone className='text-warning' /> <b>Phone: </b> +91 9550449902</li>
                    </ul>
                </div>
            </div>
            <div className="row py-4">
                <div className="col text-center">
                    <p>Copyright 2023, Design and develop by Vamshi Krishna B. All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;