import React from "react";
import Arrow from "../../assets/icons/back-arrow.svg";

export default function Summary(props) {
    return (
      <div className="summary">
        <div className="summary__name-container">
          <div className="summary__name-container__top">
            <img className="summary__name-img" src={Arrow}></img>
            <h1 className="summary__name-label">Product Name</h1>
          </div>
          <h3 className="summary__name-button">In Stock</h3>
        </div>
        <div className="summary__huge-container">
          <div className="summary__desc-container">
            <h5 className="summary__label">ITEM DESCRIPTION</h5>
            <h4 className="summary__data">
              Here is a more detailed summary of the product name, it’s uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
          </div>
          <div className="summary__large-container">
            <div className="summary__mid-container">
              <div className="summary__data-container">
                <h5 className="summary__label">ORDERED BY</h5>
                <h4 className="summary__data">Mark Saunders</h4>
              </div>
              <div className="summary__data-container">
                <h5 className="summary__label">REFERENCE NUMBER</h5>
                <h4 className="summary__data">JK2020FD7811201</h4>
              </div>
            </div>
            <div className="summary__mid-container">
              <div className="summary__data-container">
                <h5 className="summary__label">LAST ORDERED</h5>
                <h4 className="summary__data">5/24/2018</h4>
              </div>
              <div className="summary__data-container">
                <h5 className="summary__label">LOCATION</h5>
                <h4 className="summary__data">Toronto, CAN</h4>
              </div>
            </div>
            <div className="summary__data-container">
              <h5 className="summary__label">QUANTITY</h5>
              <h4 className="summary__data">12000</h4>
            </div>
            <div className="summary__data-container">
              <h5 className="summary__label">CATEGORIES</h5>
              <h4 className="summary__data">
                Industrial, Automotive, Heavy, Mechanical, Engineering,
                Transportation, Sales
              </h4>
            </div>
          </div>
        </div>
        <div className="summary__bottom-container">
          <h3 className="summary__bottom-button">EDIT</h3>
        </div>
      </div>
    );
}
