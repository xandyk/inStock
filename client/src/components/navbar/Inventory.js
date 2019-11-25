import React from "react";
import Product from "../table/product";
export default function Inventory(props) {
  const productTable =  props.productList && props.productList.map((product, index) => {
    return <Product key={index} productData={product} />;
  });
  return (

    <div className="container">
      <div className="product__top-label-container">
        <div className="product__inventory-container">
          <h1 className="product__header">Inventory</h1>
          <form>
            <label></label>
            <input
              className="product__input"
              type="text"
              name="search"
              placeholder="Search"
            ></input>
          </form>
        </div>
        <div className="product__top-container">
          <h5 className="product__label-tab">ITEM</h5>
          <div className="product__side-container">
            <h5 className="product__label-tab">LAST ORDERED</h5>
            <h5 className="product__label-tab">LOCATION</h5>
            <h5 className="product__label-tab">QUANTITY</h5>
            <h5 className="product__label-tab">STATUS</h5>
          </div>
        </div>
      </div>
      {productTable}
    // </div>
  );
}
