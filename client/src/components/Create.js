import React, { Component } from 'react'
import axios from 'axios';


export default class Create extends Component {
    render() {
        return (
            <>
                <h1 className="form__header">Create New</h1>

                <form className="form__container">
                    <div className="form__row-one">
                        <div className="box">
                            <h4 className="form__label">PRODUCT</h4>
                            <input className="form__box" type="text" name="item-name"placeholder="Item Name"/>
                        </div>
                        <div className="box">
                            <h4 className="form__label">LAST ORDERED</h4>
                            <input className="form__box" type="text" name="ordered-date" placeholder="yyy-mm-dd"/>
                        </div>
                    </div>

                    <div className="form__row-two">
                        <div className="box">
                            <h4 className="form__label">CITY</h4>
                            <input ref={ref => (this.title=ref)} className="form__box" type="text" name="city" placeholder="City"/>
                        </div>
                        <div className="box">
                            <h4 className="form__label">COUNTRY</h4>
                            <select name="countries" >
                                <option value="canada">Canada</option>
                                <option value="us">United States</option>
                            </select>
                        </div>
                    </div>

                    <div className="form__row-three">
                        <div className="box">
                            <h4 className="form__label">QUANTITY</h4>
                            <input className="form__box"type="text" name="quantity" placeholder="0"/>
                        </div>
                        
                        <div className="box">
                            <h4 className="form__header-status">STATUS</h4>
                            <span>In Stock</span>
                        </div>
                    </div>

                    <div className="box"></div>
                    <h4 className="description">ITEM DESCRIPTION</h4>
                    <input type="text" name="item-description" placeholder="(Optional)" />
                </form>

                <div className="btn-container">
                    <button className="btn-cancel">CANCEL</button>
                    <button className="btn-save">SAVE</button>
                </div>
            </>
        )
    }
}
