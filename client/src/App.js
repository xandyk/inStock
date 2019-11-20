<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './components/table/Location';

function App() {
  return (
    <div className="App">
      <Location />
    </div>
  );
}
=======
import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Inventory from './components/navbar/Inventory';
import Locations from './components/navbar/Locations';
import { BrowserRouter, Route } from 'react-router-dom';

>>>>>>> development


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/inventory" component={Inventory} />
          <Route path="/locations" component={Locations} />
        </div>
      </BrowserRouter>
    );
  }
} 

