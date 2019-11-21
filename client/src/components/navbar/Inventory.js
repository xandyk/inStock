import React from 'react';
import add from '../../assets/icons/add.svg';

const Inventory = () => {
    return(
        <div className="container">
            <h4 className="center">Inventory</h4>
            <img className="add" src={add} alt="add-icon"/>
        </div>
    )

}

export default Inventory