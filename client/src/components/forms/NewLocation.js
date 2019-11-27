import React, { Component } from 'react'
import axios from 'axios';


export default class NewLocation extends Component {
    newFormInfo = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/locations', {
            name: event.target.name.value,
            address: event.target.address.value,
            location: event.target.countries.value,
            contact: {
                name: event.target.contactname.value,
                phone: event.target.phone.value,
                position: event.target.position.value,
                email: event.target.email.value
            },
            categories: event.target.categories.value.split(',')
        }).then(response => {
            this.props.updateLocationList(response.data);
        })
        console.log(event.target.name.value);
        event.target.reset();

    }
    render() {
        return (
            <>
                <h1 className="form__header">Add New</h1>

                <form onSubmit={event => this.newFormInfo(event)} className="form__container">
                    <div className="form__row-one">
                        <h4 className="form__label">WHAREHOUSE</h4>
                        <input className="form__box" type="text" name="name" placeholder="Name and ID" />
                    </div>

                    <div className="form__row-two">
                        <div className="box">
                            <h4 className="form__label">ADDRESS</h4>
                            <input className="form__box" type="text" name="address" placeholder="Enter Address" />
                        </div>

                        <div className="box">
                            <h4 className="form__label">LOCATION</h4>
                            <select name="countries" >
                                <option value="canada">Toronto, CAN</option>
                                <option value="us">New York, US</option>
                            </select>
                        </div>
                    </div>

                    <div className="form__row-three">
                        <div className="box">
                            <h4 className="form__label">CONTACT NAME</h4>
                            <input className="form__box" type="text" name="contactname" placeholder="Enter Name" />
                        </div>
                        <div className="box">
                            <h4 className="form__label">POSITION</h4>
                            <input className="form__box" type="text" name="position" placeholder="Enter Position" />
                        </div>
                    </div>

                    <div className="form__row-four">
                        <div className="box">
                            <h4 className="form__label">PHONE NUMBER</h4>
                            <input className="form__box" type="text" name="phone" placeholder="(000)- 000- 000" />
                        </div>

                        <div className="box">
                            <h4 className="form__label">EMAIL</h4>
                            <input className="form__box" type="text" name="email" placeholder="email@instock.com" />
                        </div>
                    </div>

                    <div className="form__row-five">
                        <div className="box">
                            <h4 className="description">CATEGORIES</h4>
                            <input type="text" name="categories" placeholder="Use commas to separate each category" />
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="button" className="btn-cancel" onClick={() => this.props.history.goBack()}>CANCEL</button>
                        <button className="btn-save">SAVE</button>
                    </div>
                </form>
            </>
        );
    }
}
