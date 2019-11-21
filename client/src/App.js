import React, {Component} from 'react';
import Product from './components/table/product';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class App extends Component{
  render() {
    return (
        <div className="App">
          <Product/>
        </div>
    );
  }
} 


