import React, { Component } from 'react';
import Home from './components/navbar/Home';
import Navbar from './components/navbar/Navbar';
import Inventory from './components/navbar/Inventory';
import Locations from './components/navbar/Locations';
import { BrowserRouter, Route} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          
          <Route path="/inventory" component={Inventory} />
          <Route path="/locations" component={Locations} />
        </div>
      </BrowserRouter>
    );
  }
} 

