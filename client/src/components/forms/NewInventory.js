import React, { Component } from 'react'
// import axios from 'axios';
import Switch from '../buttons/switch';
import Select from '../buttons/select';



export default class NewInventory extends Component {
    render() {
        return (
            <>
                <h1 className="inventory__header">Create New</h1>

                <form className="inventory__container">
                    <div className="inventory__row-one">
                        <div className="box">
                            <h6 className="inventory__label">PRODUCT</h6>
                            <input className="inventory__box" type="text" name="item-name"placeholder="Item Name"/>
                        </div>
                        <div className="box">
                            <h6 className="inventory__label">LAST ORDERED</h6>
                            <input className="inventory__box" type="text" name="ordered-date" placeholder="yyy-mm-dd"/>
                        </div>
                    </div>

                    <div className="inventory__row-two">
                        <div className="box">
                            <h6 className="inventory__label">CITY</h6>
                            <input className="inventory__box" type="text" name="city" placeholder="City"/>
                        </div>
                        <div className="box">
                            <h6 className="inventory__label">COUNTRY</h6>
                            <Select />
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
                            <input className="inventory__box-description" type="text" name="item-description" placeholder="(Optional)" />
                        </div>
                    </div>
                </form>

                <div className="btn-container">
                    <button className="btn-save">SAVE</button>
                    <button className="btn-cancel">CANCEL</button>
                </div>
            </>
        )
    }
}
