import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default class Navbar extends React.Component {
    
    render() {
        return(
            <div className="navbar">
            <Link to="/"> <img className="logo" src={require('../logo.jpg')}/></Link>
            <nav className="navbar__links">
                <Link to="/projects">Projects <i className="fas fa-caret-down"></i></Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>

            </nav>
            </div>
        );
    }
}