import React from 'react'
import { Link } from 'react-router-dom'
import rightArrow from '../../assets/icons/right-arrow.svg'

export default function Location(props) {
    const { id, name, address, location, contact, categories } = props.locationData
    return (
        <div className="location__row">
            <div className="location__content">
                <div className="location__warehouse">
                    <h2 className="location__name">{name}</h2>
                    <h5 className="location__address">{address}, {location}</h5>
                </div>
                <div className="location__subcontainer">
                    <div className="location__contact">
                        <h5 className="location__contact-name">{contact.name}</h5>
                        <h5 className="location__contact-role">{contact.position}</h5>
                    </div>
                    <div className="location__contactinfo">
                        <h5 className="location__contactinfo-phone">{contact.phone}</h5>
                        <h5 className="location__contactinfo-email">{contact.email}</h5>
                    </div>
                    <div className="location__categories">
                        <div className="location__line-clamp">
                            <h5 className="location__categories-text">{categories.join(', ')}</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Link key={index} to={`/locations/${id}`}> */}

            <div className="location__image-box">
                <Link to={`/locations/id/${id}`}>
                    <img className="location__right-arrow" src={rightArrow} alt="right arrow"></img>
                </Link>
            </div>

        </div>
    )
}
