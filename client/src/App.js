import React from "react";
import Navbar from "./components/navbar/Navbar";
import Inventory from "./components/navbar/Inventory";
import Summary from "./components/table/Summary";
import Locations from "./components/navbar/Locations";
import LocationDetail from "./components/tables/LocationDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewInventory from "./components/forms/NewInventory";
import NewLocation from "./components/forms/NewLocation";
import axios from "axios";
import locationList from "./components/testData/locationData";
import productList from "./components/testData/productData";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/inventory/new" exact component={NewInventory} />

          <Route path="/locations" />
          {/* <Route path="/NewInventory" component={NewInventory} /> */}
          <Route
            path="/"
            exact
            render={props => (
              <>
                <Inventory productList={productList} />
              </>
            )}
          />
          <Route
            path="/inventory"
            exact
            render={props => (
              <>
                <Inventory productList={productList} />
              </>
            )}
          />
          <Route
            path="/Inventory/id/:id"
            render={props => (
              <>
                <Summary {...props} productList={productList} />
              </>
            )}
            />
          {/* <Route path="/locations" component={Locations} /> */}
          <Route
            path="/locations"
            exact
            render={props => (
              <>
                <Locations locationList={locationList} />
              </>
            )}
          />
          <Route
            path="/locations/new"
            exact
            render={props => (
              <>
                <NewLocation locationList={locationList} />
              </>
            )}
          />
          <Route
            path="/locations/id/:id"
            render={props => (
              <>
                <LocationDetail {...props} locationList={locationList} />
              </>
            )}
          />
          {/* </Switch> */}
        </div>
      </BrowserRouter>
    </div>
  );
}
