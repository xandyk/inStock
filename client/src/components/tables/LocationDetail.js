import React from 'react'

export default function LocationDetail(props) {
    const locationData = props.locationList.filter((location) => {
        return (props.match.params.id === location.id

        )
    })
    console.log(locationData)
    return (
        <div className="location">
            <div className="location__heading">
                <div className="location__title-box">
                    <h1 className="location__title">Locations</h1>
                </div>
                <div className="location__search-container">

                    {/* <img className="location__search-icon" src={search} alt="Search Icon"></img> */}
                    <input className="location__search-input" type="search" name="profileName" id="fname"
                        placeholder="Search"></input>
                </div>
            </div>
            {/* {locationTable} */}
            {/* <Add /> */}
        </div>
    )
}
