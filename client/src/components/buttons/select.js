import React, { Component } from 'react';
import Select from 'react-select';

class SelectButton extends Component {
      
      render() {
        const options = [
            { value: 'Warehouse 1', label: 'Warehouse' },
            { value: 'Warehouse 2', label: 'Warehouse' },
            { value: 'Warehouse 3', label: 'Warehouse' },
            { value: 'Warehouse 4', label: 'Warehouse' },
            { value: 'Warehouse 5', label: 'Warehouse' },
            { value: 'Warehouse 6', label: 'Warehouse' },
            { value: 'Warehouse 7', label: 'Warehouse' },
            { value: 'Warehouse 8', label: 'Warehouse' },
          ]
          
          return(
            <Select onChange = {option => this.props.onSelected(option)}options = {this.props.options}></Select>
          );
      }
      
}


export default SelectButton


  