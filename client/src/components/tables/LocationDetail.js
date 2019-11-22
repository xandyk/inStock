import React from 'react'
import backArrow from '../../assets/icons/back-arrow.svg'


export default function LocationDetail(props) {
    const locationData = props.locationList.find((location) => {
        return (props.match.params.id === location.id

        )
    })
    console.log(locationData)
    return (
        <div className="locationDetail">
            <div className="locationDetail__heading">

                <div className="locationDetail__title-box">
                    <div className="locationDetail__backArrow-box">
                        <img className="locationDetail__backArrow" src={backArrow} />
                    </div>
                    <h1 className="locationDetail__title">{locationData.name}</h1>
                </div>
            </div>
            {/* {locationTable} */}
            {/* <Add /> */}
        </div>
    )
}
