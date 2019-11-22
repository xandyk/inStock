import React, { Component } from 'react';
import Select from 'react-select';

class SelectButton extends Component {
      
      render() {
        const options = [
            { value: 'canada', label: 'Canada' },
            { value: 'us', label: 'United States' }
          ]
          
          return(
            <Select options = {options}></Select>
          );
      }
      
}


export default SelectButton


  