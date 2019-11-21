import React, {Component} from 'react';
import Product from './components/table/product';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Product(props){

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
}

export default class App extends Component{
  render() {
    return (
        <div className="App">
          <Product/>
        </div>
    );
  }
} 


