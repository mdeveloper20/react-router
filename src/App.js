import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch,Route, useLocation } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ProductsComponent from './components/ProductsComponent';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path={'/'} component={HomeComponent} />
        <Route exact path={'/about'} component={AboutComponent} />
        <Route exact path={'/products/:id?'} component={ProductsComponent} />
        <Router path={'*'}>
          <NotFound/>
        </Router>
      </Switch>
    </Router>
  );
}

function NotFound(){
  let location=useLocation();
  return <h2>Page not found {location.pathname}</h2>
}

export default App;
