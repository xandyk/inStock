import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Inventory from './components/navbar/Inventory';
import Locations from './components/navbar/Locations';
import LocationDetail from './components/tables/LocationDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewInventory from './components/forms/NewInventory';
import locationList from './components/testData/locationData'
import productList from './components/testData/productData'
import Location from './components/tables/Location';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Switch> */}
          {/* <Route path="/NewInventory" component={NewInventory} /> */}
          <Route
            path="/" exact
            render={props =>
              <>
                <Inventory productList={productList} />
              </>
            }
          />
          <Route
            path="/inventory" exact
            render={props =>
              <>
                <Inventory productList={productList} />
              </>
            }
          />
          {/* <Route path="/locations" component={Locations} /> */}
          <Route
            path="/locations" exact
            render={props =>
              <>
                <Locations locationList={locationList} />
              </>
            }
          />
          <Route
            path="/locations/:id"
            render={props =>
              <>
                <LocationDetail {...props} locationList={locationList} />
              </>
            }
          />
          {/* </Switch> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

// import React, { Component } from 'react';
// import Navbar from './components/navbar/Navbar';
// import Inventory from './components/navbar/Inventory';
// import Locations from './components/navbar/Locations';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Location from './components/table/Location';

// export default function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div className="App">
//           <Navbar />
//           <Route path="/inventory" component={Inventory} />
//           <Route
//             path="/locations"
//             render={props =>
//               <>
//                 <Locations locationList={locationList} />
//               </>
//             }
//           />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }






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