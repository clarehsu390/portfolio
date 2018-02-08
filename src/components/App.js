import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Page from './Page';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Page />
    </HashRouter>
  );
};

export default App;
