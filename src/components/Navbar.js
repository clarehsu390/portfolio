import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default class Navbar extends React.Component {
    
    render() {
        return(
            <div className="navbar">
            <nav className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>

            </nav>
            </div>
        );
    }
}