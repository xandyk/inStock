import React from 'react'
import Location from '../table/Location'

export default function Locations(props) {
    const locationTable = props.locationList.map((location, index) => {
        return (
            <Location key={index} locationData={location} />
        )
    })
    return (
        <div className="location">
            <h1 className="location__title">Locations</h1>
            {locationTable}
        </div>
    )
}