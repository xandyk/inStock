import React from "react";

export default function Product(props) {
  return (
    <div className="product">
      <div className="product__top-container">
        <h1 className="product__header">Inventory</h1>
        <form>
            <label></label>
            <input className="product__input" type="text" name="search" placeholder="          Search"></input>
        </form>
      </div>
      <div className="product__mid-container">
        <div>
          <h5 className="product__label">ITEM</h5>
          <h3 className="product__name">Product Name Here</h3>
          <h4 className="product__data">
            Here is a very brief description of the product...
          </h4>
        </div>
        <div className="product__data-container">
          <h5 className="product__label">LAST ORDERED</h5>
          <h4 className="product__data">05/24/2018</h4>
        </div>
        <div className="product__data-container">
          <h5 className="product__label">LOCATION</h5>
          <h4 className="product__data">Toronto, CAN</h4>
        </div>
        <div className="product__data-container">
          <h5 className="product__label">QUANTITY</h5>
          <h4 className="product__data">12,000</h4>
        </div>
        <div className="product__data-container">
          <h5 className="product__label">STATUS</h5>
          <h4 className="product__data">In Stock</h4>
      </div>
      </div>
      </div>
  );
}
