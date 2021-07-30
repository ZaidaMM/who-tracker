import React, { Fragment } from 'react';
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CountryItem from './components/countries/CountryItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
       
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            
            </Switch>
          </div>
          <CountryItem />
      
        
      </div>
    </Router>
    
  );
}

export default App;
