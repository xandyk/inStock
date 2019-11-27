import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Switch from '../buttons/switch';
import Select from '../buttons/select';
import locationlist from "../testData/locationData"
import axios from 'axios'
export default class NewInventory extends Component {
    state = {
        warehouseId: undefined,
        status: false
    }
    newFormInfo = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/inventory', {
            id: this.state.warehouseId,
            item: event.target.itemName.value,
            date: event.target.orderedDate.value,
            city: event.target.city.value,
            quantity: event.target.quantity.value,
            status: this.state.status,
            description: event.target.itemDescription.value
        }).then(response => {
            this.props.updateProductList(response.data);
        })

        console.log(this.state.warehouseId)
        console.log(event.target.itemName.value)
        console.log(event.target.orderedDate.value)
        console.log(event.target.city.value)
        console.log(event.target.quantity.value)
        console.log(event.target.itemDescription.value)
        event.target.reset();

    }
    onSelected = (option) => {
        const value = option.value;

        const warehouse = locationlist.filter(location => {
            return location.id === value
        })
        this.city.value = warehouse[0].location
        this.setState({
            warehouseId: value
        })
    }

    onSwitch = (switchState) => {
        this.setState({
            status: switchState
        })
    }
    render() {
        const options = locationlist.map(location => {
            return { value: location.id, label: location.name }
        })
        return (
            <>
                <h1 className="inventory__header">Create New</h1>

                <form onSubmit={event => this.newFormInfo(event)} className="inventory__container">
                    <div className="inventory__row-one">
                        <div className="box">
                            <h6 className="inventory__label">PRODUCT</h6>
                            <input className="inventory__box" type="text" name="itemName" placeholder="Item Name" />
                        </div>
                        <div className="box">
                            <h6 className="inventory__label">LAST ORDERED</h6>
                            <input className="inventory__box" type="text" name="orderedDate" placeholder="yyyy-mm-dd" />
                        </div>
                    </div>

                    <div className="inventory__row-two">
                        <div className="box">
                            <h6 className="inventory__label">CITY</h6>
                            <input ref={ref => (this.city = ref)} className="inventory__box" type="text" name="city" placeholder="City" />
                        </div>
                        <div className="box">
                            <h6 className="inventory__label">WAREHOUSE</h6>
                            <Select onSelected={this.onSelected} options={options} />
                        </div>
                    </div>

                    <div className="inventory__row-three">
                        <div className="box">
                            <h6 className="inventory__label quantity">QUANTITY</h6>
                            <input className="inventory__box" type="text" name="quantity" placeholder="0" />
                        </div>

                        <div className="box">
                            <h6 className="inventory__label status">STATUS</h6>
                            <div className="status__box">
                                <span>{this.state.status ? 'In Stock' : 'Out of Stock'}</span>
                                <span><Switch onSwitch={this.onSwitch} /></span>
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
                        <button type='submit' className="btn-save">SAVE</button>
                        <button type="button" className="btn-cancel" onClick={() => this.props.history.goBack()}>CANCEL</button>
                    </div>
                </form>
            </>
        )
    }
}
