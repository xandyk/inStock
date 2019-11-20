import React from 'react';
import logo from './logo.svg';
import Product from './components/table/product'
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product/>
      </header>
    </div>
  );
}

export default App;
