import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Inventory from "./components/navbar/Inventory";
import Summary from "./components/table/Summary";
import Locations from "./components/navbar/Locations";
import LocationDetail from "./components/tables/LocationDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewInventory from "./components/forms/NewInventory";
import NewLocation from "./components/forms/NewLocation";
import axios from "axios";
// import locationList from "./components/testData/locationData";
// import productList from "./components/testData/productData";

const url = 'http://localhost:5000'

export default class App extends Component {
  state = {
    locationList: [],
    productList: []
  }

  componentDidMount() {
    axios.get(`${url}/inventory`).then(response => {
      this.setState({
        productList: response.data
      })
    })
    axios.get(`${url}/locations`).then(response => {
      this.setState({
        locationList: response.data
      })
    })
  }
  // , () => console.log(this.state.productList)
  updateProductList = (newProduct) => {
    console.log('running reload items')
    this.setState({
      productList: [...this.state.productList, newProduct]
    })
  }
  // ,() => console.log(this.state.productList)

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Navbar />

            <Route
              path="/inventory/new" exact render={props => (
                <>
                  <NewInventory {...props} updateProductList={this.updateProductList} />
                </>
              )}
            />

            <Route path="/locations" />
            {/* <Route path="/NewInventory" component={NewInventory} /> */}
            <Route
              path="/"
              exact
              render={props => (
                <>
                  <Inventory productList={this.state.productList} />
                </>
              )}
            />
            <Route
              path="/inventory"
              exact
              render={props => (
                <>
                  <Inventory productList={this.state.productList} />
                </>
              )}
            />
            <Route
              path="/Inventory/id/:id"
              render={props => (
                <>
                  <Summary {...props} productList={this.state.productList} />
                </>
              )}
            />
            {/* <Route path="/locations" component={Locations} /> */}
            <Route
              path="/locations"
              exact
              render={props => (
                <>
                  <Locations locationList={this.state.locationList} />
                </>
              )}
            />
            <Route
              path="/locations/new"
              exact
              render={props => (
                <>
                  <NewLocation locationList={this.state.locationList} />
                </>
              )}
            />
            <Route
              path="/locations/id/:id"
              render={props => (
                <>
                  <LocationDetail {...props} locationList={this.state.locationList} />
                </>
              )}
            />
            {/* </Switch> */}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
