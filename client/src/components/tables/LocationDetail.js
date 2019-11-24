import React from 'react'
import backArrow from '../../assets/icons/back-arrow.svg'


export default function LocationDetail(props) {
    const locationData = props.locationList.find((location) => {
        return (props.match.params.id === location.id

        )
    })
    const { id, name, address, contact, categories } = locationData
    console.log(locationData)
    return (
        <div className="locationDetail">
            <div className="locationDetail__heading">

                <div className="locationDetail__title-box">
                    <div className="locationDetail__backArrow-box">
                        <img className="locationDetail__backArrow" src={backArrow} />
                    </div>
                    <h1 className="locationDetail__title">{name}</h1>
                </div>
            </div>
            <div className="locationDetail__labels">
                <h5 className="locationDetail__labels-text">ADDRESS</h5>


                <h5 className="locationDetail__labels-text">CONTACT</h5>
                <div className="locationDetail__contact">
                    <h5 className="locationDetail__contact-name">{contact.name}</h5>
                    <h5 className="locationDetail__contact-role">{contact.role}</h5>
                </div>
                <div className="locationDetail__contactinfo">
                    <h5 className="locationDetail__contactinfo-phone">{contact.phone}</h5>
                    <h5 className="locationDetail__contactinfo-email">{contact.email}</h5>
                </div>



                <h5 className="locationDetail__labels-text">CONTACT INFORMATION</h5>
                <h5 className="locationDetail__labels-text locationDetail__labels-text--last">CATEGORIES</h5>
            </div>
            {/* {locationTable} */}
            {/* <Add /> */}
        </div>
    )
}
