import React from "react";
import { Link } from "react-router-dom";
import Kebab from "../../assets/icons/kebab-default.svg";

export default function Products(props) {
  const {
    id,
    name,
    location,
    quantity,
    descriptionBrief,
    dateOrdered,
    status
  } = props.productData;
  return (
    <div className="product">
      <div className="product__large-container">
        <div className="product__mid-container">
          <div className="product__label-container">
            <h5 className="product__label">ITEM</h5>
            <Link to={`/inventory/id/${id}`}>
              <h3 className="product__name">{name}</h3>
            </Link>
            <h4 className="product__data">{descriptionBrief}</h4>
          </div>
          <div className="product__data-container">
            <h5 className="product__label">LAST ORDERED</h5>
            <h4 className="product__data">{dateOrdered}</h4>
          </div>
          <div className="product__data-container">
            <h5 className="product__label">LOCATION</h5>
            <h4 className="product__data">{location}</h4>
          </div>
          <div className="product__data-container">
            <h5 className="product__label">QUANTITY</h5>
            <h4 className="product__data">{quantity}</h4>
          </div>
          <div className="product__data-container">
            <h5 className="product__label">STATUS</h5>
            <h4 className="product__data">{status}</h4>
          </div>
        </div>
        <div className="product__button-container">
          <img src={Kebab} alt="kebab" />
        </div>
      </div>
    </div>
  );
}
