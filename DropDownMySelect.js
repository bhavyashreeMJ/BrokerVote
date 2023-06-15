import React from 'react';
import Select from 'react-select';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownMySelect = (props) => {

    const {options, selectedOption, handleChange}= props;
    return(
        <div className="container">
        <Select className="custom-dropdown" 
            options={options}  
            onChange= {handleChange}
            value={selectedOption}
            placeholder ="Select"    />
             </div>

    );

};
    

   

export default DropdownMySelect;