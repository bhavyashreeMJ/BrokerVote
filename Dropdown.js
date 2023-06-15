import React from 'react';
import Select from 'react-select';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownSelect = () => {

    const options = ['Andrew Brew','Us Large Cap Growth' , 'Bruce Aronow'];
    const stylevalue ={'align-content': 'left'};
    return (
        <div className="container">
        <Select options={options} className="custom-dropdown" />
      </div>
        
       
        
    );

};

export default DropdownSelect;