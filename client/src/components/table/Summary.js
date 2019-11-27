import React from "react";
import { Link } from 'react-router-dom'
import Arrow from "../../assets/icons/back-arrow.svg";

export default function Summary(props) {
  const productData = props.productList.find((product) => {
    return (props.match.params.id === product.id
    )
  })

  const {
    name,
    status,
    descriptionBrief,
    descriptionDetail,
    orderedBy,
    refNumber,
    dateOrdered,
    location,
    quantity,
    categories
  } = productData;

  let statusStyling = ''
  if (status === 'In Stock') {
    statusStyling = 'summary__name-button'
  } else {
    statusStyling = 'summary__name-button summary__name-button--OOS'
  }
  return (
    <div className="summary">
      <div className="summary__name-container">
        <div className="summary__name-container__top" onClick={() => props.history.goBack()}>
          <button className='summary__name-img summary__button' to='/inventory' >
            <img className="summary__name-img" src={Arrow}></img>
          </button>
          <h1 className="summary__name-label">{name}</h1>
        </div>
        <h3 className={`${statusStyling}`}>{status}</h3>
      </div>
      <div className="summary__huge-container">
        <div className="summary__desc-container">
          <h5 className="summary__label">{descriptionBrief}</h5>
          <h4 className="summary__data">{descriptionDetail}</h4>
        </div>
        <div className="summary__large-container">
          <div className="summary__mid-container">
            <div className="summary__data-container">
              <h5 className="summary__label">ORDERED BY</h5>
              <h4 className="summary__data">{orderedBy}</h4>
            </div>
            <div className="summary__data-container">
              <h5 className="summary__label">REFERENCE NUMBER</h5>
              <h4 className="summary__data">{refNumber}</h4>
            </div>
          </div>
          <div className="summary__mid-container">
            <div className="summary__data-container">
              <h5 className="summary__label">LAST ORDERED</h5>
              <h4 className="summary__data">{dateOrdered}</h4>
            </div>
            <div className="summary__data-container">
              <h5 className="summary__label">LOCATION</h5>
              <h4 className="summary__data">{location}</h4>
            </div>
          </div>
          <div className="summary__data-container">
            <h5 className="summary__label">QUANTITY</h5>
            <h4 className="summary__data">{quantity}</h4>
          </div>
          <div className="summary__data-container">
            <h5 className="summary__label">CATEGORIES</h5>
            <h4 className="summary__data">{categories.join(', ')}</h4>
          </div>
        </div>
      </div>
      <div className="summary__bottom-container">
        <h3 className="summary__bottom-button">EDIT</h3>
      </div>
    </div>
  );
}
