import React from "react";

export default function Summary(props) {
    return (
        <div className="summary">
            <div className="summary__name-container">
                <h1>Product Name</h1>
                <h3>In Stock</h3>
            </div>
            <div className="summary__desc-container">
                <h5 className="summary__label">ITEM DESCRIPTION</h5>
                <h4>Here is a more detailed summary of the product name, it’s uses, 
                industries and possible attributes that could be used to describe 
                the product.</h4>
            </div>
            <div className="summary__mid-container">
            <div className="summary__data-container">
                <h5 className="summary__label">ORDERED BY</h5>
                <h4>Mark Saunders</h4>
            </div>
            <div className="summary__data-container">>
                <h5 className="summary__label">REFERENCE NUMBER</h5>
                <h4>JK2020FD7811201</h4>
            </div>
            <div className="summary__data-container">>
                <h5 className="summary__label">LAST ORDERED</h5>
                <h4>5/24/2018</h4>
            </div>
            <div className="summary__data-container">>
                <h5 className="summary__label">LOCATION</h5>
                <h4>Toronto, CAN</h4>
            </div>
           <div className="summary__data-container">>
                <h5 className="summary__label">QUANTITY</h5>
                <h4>12000</h4>
            </div>
            <div className="summary__data-container">>
                <h5 className="summary__label">CATEGORIES</h5>
                <h4>Industrial, Automotive, Heavy, Mechanical, Engineering, 
                Transportation, Sales</h4>
            </div>
            </div>
            <div className="summary__buttom-container">    
                <h3>EDIT</h3>
            </div>
        </div>
    );
}
