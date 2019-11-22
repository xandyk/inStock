import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Inventory from './components/navbar/Inventory';
import Locations from './components/navbar/Locations';
import { BrowserRouter, Route } from 'react-router-dom';
import NewInventory from './components/forms/NewInventory';

import Location from './components/tables/Location';


const productList = [

{
  "id": "cd56e64c-119b-46ce-b88b-55308726a57d",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
},
{
  "id": "0d13b07c-f619-43a2-92b1-38fc29a2c07d",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
},
{
  "id": "f6f3574d-8eaf-4b5e-b100-f16da305533d",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
},
{
  "id": "5a28ad82-995f-4651-9fb2-07fd2e42bb4c",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
},
{
  "id": "31fd6459-96a4-4536-9c92-443e7fc5d8a2",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
},
{
  "id": "9862a23d-892b-45eb-987a-7c253793a9f5",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
},
{
  "id": "fbcb3d80-8ee3-4d90-a6e9-e8442379b816",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
},
{
  "id": "da40be83-e9cd-4068-968e-f8a2980ae4fa",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
},
{
  "id": "98800c03-cc61-46ab-866e-8f4a76824202",
    "name": "Product Name Here",
      "descriptionBrief": "Here is a very brief description of the product...",
        "descriptionDetail": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          "orderDate": "05/24/2018",
            "location": "Toronto, CAN",
              "quantity": 12000,
                "instock": true,
                  "categories": [
                    "Industrial",
                    "Automotive",
                    "Heavy",
                    "Mechanical",
                    "Engineering",
                    "Transportation",
                    "Sales"
                  ]
}
]

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar />
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
          <Route
            path="/locations"
            render={props =>
              <>
                <Locations locationList={locationList} />
              </>
            }
          />
        </div>
    );
  }
} 
// import React, { Component } from 'react';
// import Navbar from './components/navbar/Navbar';
// import Inventory from './components/navbar/Inventory';
// import Locations from './components/navbar/Locations';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Location from './components/table/Location';

// const locationList = [
//   {
//     "id": "32bbed84-d450-47a6-a2f1-0648ff9c01d1",
//     "name": "Warehouse Number 1",
//     "address": "469 King St W, Toronto, ON",
//     "contact": {
//       "name": "Mara Weinberg",
//       "role": "Warehouse Manager",
//       "phone": "+1 416 678 2345",
//       "email": "mweinberg@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   },
//   {
//     "id": "bb3ee9bf-a150-48ca-bfcf-31c15b499250",
//     "name": "Warehouse Number 2",
//     "address": "8012 Marlborough Court, Estevan, SK",
//     "contact": {
//       "name": "Raul Monroe",
//       "role": "Warehouse Manager",
//       "phone": "+1 306 555 0148",
//       "email": "rmonroe@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   },
//   {
//     "id": "2373883c-3d43-4fb9-a754-25771e6849be",
//     "name": "Warehouse Number 3",
//     "address": "730 West 6th Court, Marieville, QC",
//     "contact": {
//       "name": "Diane Minnick",
//       "role": "Warehouse Manager",
//       "phone": "+1 418 555 0148",
//       "email": "dminnick@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   },
//   {
//     "id": "02ed0c4d-25a8-4f2c-b572-0db8ee3bc539",
//     "name": "Warehouse Number 4",
//     "address": "7514 Illinois St., Woodstock, NB",
//     "contact": {
//       "name": "Vaughn Romano",
//       "role": "Warehouse Manager",
//       "phone": "+1 506 555 0173",
//       "email": "vromano@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   },
//   {
//     "id": "43f431f9-83ea-4ae4-9ffa-75b18a50afd9",
//     "name": "Warehouse Number 5",
//     "address": "428 West Euclid St., Salmon Arm, BC",
//     "contact": {
//       "name": "Dale Bowman",
//       "role": "Warehouse Manager",
//       "phone": "+1 250 555 0130",
//       "email": "dbowman@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   },
//   {
//     "id": "c3bdcd0f-1027-4311-b227-057e6637c6f3",
//     "name": "Warehouse Number 6",
//     "address": "699 Silver Spear Street, Queens County, NS",
//     "contact": {
//       "name": "Charity Jones",
//       "role": "Warehouse Manager",
//       "phone": "+1 902 555 0108",
//       "email": "cjones@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   },
//   {
//     "id": "1b42d781-f835-420d-a296-049f8dd58d0b",
//     "name": "Warehouse Number 7",
//     "address": "9944 E. Westminster Court , Portage la Prairie, MB",
//     "contact": {
//       "name": "Shauna Packard",
//       "role": "Warehouse Manager",
//       "phone": "+1 204 555 0181",
//       "email": "spackard@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   },
//   {
//     "id": "206497a3-ab89-4950-9401-60f088dae0ee",
//     "name": "Warehouse Number 8",
//     "address": "9473 Buckingham Street, Strathmore, AB",
//     "contact": {
//       "name": "Kylie Krell",
//       "role": "Warehouse Manager",
//       "phone": "+1 780 555 0179",
//       "email": "kkrellg@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   },
//   {
//     "id": "fd087105-244b-4844-a30b-e2a350ee9655",
//     "name": "Warehouse Number 9",
//     "address": "8896 Harvard Ave., Whitehorse, Yukon",
//     "contact": {
//       "name": "Ramon Vasquez",
//       "role": "Warehouse Manager",
//       "phone": "+1 867 555 0146",
//       "email": "rvasquez@instack.com"
//     },
//     "categories": [
//       "Industrial",
//       "Automotive",
//       "Heavy",
//       "Mechanical",
//       "Engineering"
//     ]
//   }
// ]

// export default function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div className="App">
//           <Navbar />
//           <Route path="/inventory" component={Inventory} />
//           {/* <Route path="/locations" component={Locations} /> */}
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


