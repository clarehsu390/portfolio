import React from 'react';
import { Route } from 'react-router-dom';
import "./Navbar.css";
import About from './About';
import ProjectIndex from './Projects';
import HomePage from './Homepage';
import Navbar from './Navbar';
const Page = () => (
    <div>
        <Navbar/>
        <HomePage/>
        </div>
);

export default Page;