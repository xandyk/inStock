import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Inventory from './components/navbar/Inventory';
import Locations from './components/navbar/Locations';
import { BrowserRouter, Route } from 'react-router-dom';
import NewInventory from './components/forms/NewInventory';

import locationList from './components/testData/locationData';
import productList from './components/testData/productData';
import Location from './components/tables/Location';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/inventory/new" exact component={NewInventory} />

          <Route path="/locations"/>
          {/* <Route path="/NewInventory" component={NewInventory} /> */}
          <Route
            path="/inventory"
            render={props =>
              <>
                <Inventory productList={productList} />
              </>
            }
          />
          {/* <Route path="/locations" component={Locations} /> */}
          {/* <Route
            path="/locations"
            render={props =>
              <>
                <Locations locationList={locationList} />
              </>
            }
          /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}
