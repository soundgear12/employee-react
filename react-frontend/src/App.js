import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
                <Switch> http://localhost:3000/
                    <Route path = "/" component = {ListEmployeeComponent}></Route>
                    <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                    <ListEmployeeComponent />
                </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;