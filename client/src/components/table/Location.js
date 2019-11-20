import React from 'react'

export default function Location(props) {
    return (
        <div className="location__row">
            <div className="location__warehouse">
                <h2 className="location__name">Warehouse Number 1</h2>
                <h5 className="location__address">469 King St W, Toronto, ON</h5>
            </div>
            <div className="location__contact">
                <h5 className="location__contact-name">Mara Weinberg</h5>
                <h5 className="location__contact-role">Warehouse Manager</h5>
            </div>
            <div className="location__contact-info">
                <h5 className="location__contact-phone">+1 416 678 2345</h5>
                <h5 className="location__contact-email">Warehouse Manager</h5>
            </div>
            <div className="location__categories">
                <h5 className="location__contact-phone">Industrial, Automotive, Heavy, Mechanical, Engineering</h5>
            </div>
        </div>
    )
}
