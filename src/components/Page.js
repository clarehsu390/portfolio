import React from 'react';
import { Route } from 'react-router-dom';
import ProjectIndex from './Projects';
import HomePage from './Homepage';
const Page = () => (
    <div>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/projects' component={ ProjectIndex }/>
        </div>
);

export default Page;