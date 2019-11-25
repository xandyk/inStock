import React, { Component } from 'react'
// import axios from 'axios';
import Switch from '../buttons/switch';
import Select from '../buttons/select';
import locationlist from "../testData/locationData"

export default class NewInventory extends Component { 
state = {
    warehouseId: undefined
}
 newFormInfo = (event) => {  
    event.preventDefault()
    console.log(this.state.warehouseId)
    console.log(event.target.itemName.value)
    console.log(event.target.orderedDate.value)
    console.log(event.target.city.value)
    console.log(event.target.quantity.value)
    console.log(event.target.itemDescription.value)
    ;
 }
    onSelected = (option) => {
        const value = option.value;
    

        const warehouse = locationlist.filter(location => {
            return location.id === value 
        })
        this.city.value = warehouse[0].location
        this.setState({
            warehouseId:value
        })
    }
    render() {
        console.log(locationlist)
        const options = locationlist.map(location => {
            return {value: location.id, label: location.name}
        })
        return (
            <>
                <h1 className="inventory__header">Create New</h1>

                <form onSubmit = {event => this.newFormInfo(event)} className="inventory__container">
                    <div className="inventory__row-one">
                        <div className="box">
                            <h6 className="inventory__label">PRODUCT</h6>
                            <input className="inventory__box" type="text" name="itemName" placeholder="Item Name"/>
                        </div>
                        <div className="box">
                            <h6 className="inventory__label">LAST ORDERED</h6>
                            <input className="inventory__box" type="text" name="orderedDate" placeholder="yyyy-mm-dd"/>
                        </div>
                    </div>

                    <div className="inventory__row-two">
                        <div className="box">
                            <h6 className="inventory__label">CITY</h6>
                            <input  ref = {ref => (this.city = ref)}className="inventory__box" type="text" name="city" placeholder="City"/>
                        </div>
                        <div className="box">
                            <h6 className="inventory__label">WAREHOUSE</h6>
                            <Select onSelected = {this.onSelected} options = {options}/>
                        </div>
                    </div>

                    <div className="inventory__row-three">
                        <div className="box">
                            <h6 className="inventory__label quantity">QUANTITY</h6>
                            <input className="inventory__box"type="text" name="quantity" placeholder="0"/>
                        </div>
                        
                        <div className="box">
                            <h6 className="inventory__label status">STATUS</h6>
                            <div className="status__box">
                                <span>In Stock</span>
                                <span><Switch /></span>
                            </div>
                        </div>
                    </div>

                    <div className="inventory__row-four">
                        <div className="box description">
                            <h6 className="inventory__label">ITEM DESCRIPTION</h6>
                            <input className="inventory__box-description" type="text" name="itemDescription" placeholder="(Optional)" />
                        </div>
                    </div>
                    <div className="btn-container">
                    <button  type = 'submit' className="btn-save">SAVE</button>
                    <button className="btn-cancel">CANCEL</button>
                </div>
                </form>               
            </>
        )
    }
}
