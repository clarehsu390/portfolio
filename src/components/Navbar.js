import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default class Navbar extends React.Component {
    
    render() {
        return(
            <div className="navbar">
            <a href="/"> <img className="logo" src={require('../logo.jpg')}/></a>
            <nav className="navbar__links">
                <a href="#projects">Projects <i className="fas fa-caret-down"></i></a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>

            </nav>
            </div>
        );
    }
}