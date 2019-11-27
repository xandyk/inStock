import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../table/product'
import backArrow from '../../assets/icons/back-arrow.svg'


export default function LocationDetail(props) {
    const locationData = props.locationList.find((location) => {
        return (props.match.params.id === location.id

        )
    })

    const { id, name, address, location, contact, categories, inventory } = locationData
    console.log(locationData)
    const productTable = inventory.map((product, index) => {
        return <Product key={index} productData={product} />;
    });
    return (
        <div className="locationDetail">
            <div className="locationDetail__upperContainer">
                <div className="locationDetail__heading">
                    <div className="locationDetail__title-box">
                        <div className="locationDetail__backArrow-box">
                            <button className="locationDetail__backArrow-button" onClick={() => props.history.goBack()}>
                                <img className="locationDetail__backArrow" src={backArrow} />
                            </button>
                        </div>
                        <h1 className="locationDetail__title">{name}</h1>
                    </div>
                </div>
                <div className="locationDetail__information">
                    <div className="locationDetail__column">
                        <h5 className="locationDetail__labels-text">ADDRESS</h5>
                        <div className="locationDetail__address-box">
                            <h5 className="locationDetail__address">{address}</h5>
                        </div>
                        <div className="locationDetail__location-box">
                            <h5 className="locationDetail__location">{location}</h5>
                        </div>
                    </div>
                    <div className="locationDetail__column">
                        <h5 className="locationDetail__labels-text">CONTACT</h5>
                        <div className="locationDetail__contact">
                            <h5 className="locationDetail__contact-name">{contact.name}</h5>
                            <h5 className="locationDetail__contact-role">{contact.position}</h5>
                        </div>
                        <div className="locationDetail__contactinfo">
                            <h5 className="locationDetail__contactinfo-phone">{contact.phone}</h5>
                            <h5 className="locationDetail__contactinfo-email">{contact.email}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="locationDetail__inventory">
                <div className="locationDetail__inventory-box">
                    <div className="product__top-container">
                        <h5 className="product__label-tab">ITEM</h5>
                        <div className="product__side-container">
                            <h5 className="product__label-tab">LAST ORDERED</h5>
                            <h5 className="product__label-tab">LOCATION</h5>
                            <h5 className="product__label-tab">QUANTITY</h5>
                            <h5 className="product__label-tab">STATUS</h5>
                        </div>
                    </div>
                    {productTable}
                </div>
            </div>
            {/* <Add /> */}
        </div>
    )
}
