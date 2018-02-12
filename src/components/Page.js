import React from 'react';
import { Route } from 'react-router-dom';
import "./Navbar.css";
import About from './About';
import ProjectIndex from './Projects';
import HomePage from './Homepage';
import Navbar from './Navbar';
const Page = () => (
    <div>
        <Route path="/" component={ Navbar }/>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/about' component={ About }/>
        <Route path='/projects' component={ ProjectIndex }/>
        </div>
);

export default Page;