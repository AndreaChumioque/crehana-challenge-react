import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as moment from 'moment';
import 'moment/locale/es';
import { Container } from '@material-ui/core';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import './App.css';

moment.default().locale('es');

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Route path="/" exact component={JobList} />
        <Route path="/detail/:companyslug/:jobslug" exact component={JobDetail} />
      </Container >
    </Router>
  );
}

export default App;
