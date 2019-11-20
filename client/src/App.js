import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Inventory from './components/navbar/Inventory';
import Locations from './components/navbar/Locations';
import { BrowserRouter, Route } from 'react-router-dom';
import Location from './components/table/Location';

const locationData = {
  "id": "32bbed84-d450-47a6-a2f1-0648ff9c01d1",
  "name": "Warehouse Number 1",
  "address": "469 King St W, Toronto, ON",
  "contact": {
    "name": "Mara Weinberg",
    "role": "Warehouse Manager",
    "phone": "+1 416 678 2345",
    "email": "mweinberg@instack.com"
  },
  "categories": [
    "Industrial",
    "Automotive",
    "Heavy",
    "Mechanical",
    "Engineering",
    "Transportation"
  ]
}

export default function App() {
  return (
    <div className="App">
      <Location locationData={locationData} />
    </div>
  );
}






// export default class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Navbar />
//           <Route path="/inventory" component={Inventory} />
//           <Route path="/locations" component={Locations} />
//         </div>
//       </BrowserRouter>
//     );
//   }
// } 

