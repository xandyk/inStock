import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Kebab from "../../assets/icons/kebab-default.svg";

export default class Products extends Component {
  state = {
    hidden: false,
    removeBtnClass: ''
  }

  revealRemove = () => {
    console.log('handler started')
    let hide = this.state.hidden
    let removeBtnClassString = ''
    if (hide) {
      hide = !hide
      removeBtnClassString = '--reveal'
    } else {
      hide = !hide
      removeBtnClassString = ''
    }
    this.setState({
      hidden: hide,
      removeBtnClass: removeBtnClassString
    })
  }

  render() {
    const {
      id,
      name,
      location,
      quantity,
      descriptionBrief,
      dateOrdered,
      status
    } = this.props.productData;
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
            <img className="product__kebab" src={Kebab} alt="kebab" onClick={this.revealRemove} />
            <button className={`product__remove${this.state.removeBtnClass}`}>Remove</button>
          </div>
        </div>
      </div>
    );
  }
}


// export default function Products(props) {


//   let hidden = false
//   let removeBtnClass = ''
//   let 
//   render() {

//   }
// }
