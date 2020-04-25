import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from '@material-ui/core';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        {/* <JobList /> */}

        <Route path="/" exact component={JobList} />
        <Route path="/detail/:companyslug/:jobslug" exact component={JobDetail} />
      </Container >
    </Router>
  );
}

export default App;
