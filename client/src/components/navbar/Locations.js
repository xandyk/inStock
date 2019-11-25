import React from 'react'
import { Link } from 'react-router-dom'
import Location from '../tables/Location'
import Add from '../buttons/add'
import search from '../../assets/icons/search.svg'



export default function Locations(props) {
    const locationTable = props.locationList.map((location, index) => {
        return (
            <Location key={index} locationData={location} />
        )
    })
    return (
        <div className="location">
            <div className="location__heading">
                <div className="location__title-box">
                    <h1 className="location__title">Locations</h1>
                </div>
                <div className="location__search-container">
                    <img className="location__search-icon" src={search} alt="Search Icon"></img>
                    <input className="location__search-input" type="search" name="profileName" id="fname"
                        placeholder="Search"></input>
                </div>
            </div>
            <div className="location__labels">
                <h5 className="location__labels-text">WAREHOUSE</h5>
                <h5 className="location__labels-text">CONTACT</h5>
                <h5 className="location__labels-text">CONTACT INFORMATION</h5>
                <h5 className="location__labels-text location__labels-text--last">CATEGORIES</h5>
            </div>
            {locationTable}
            <Link to="/locations/new">
                <Add />
            </Link>
        </div>
    )
}