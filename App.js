import React, {  useState} from 'react';
import Navbar from "./Components/Navbar";
import HomeDataGrid from './Components/GridDemo';
import NavbarHome from './Components/NavbarHome';
import DropdownSelect from './Components/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownMySelect from './Components/DropDownMySelect';



const App = () => {


    const style = {
    /*'textAlign': 'center',*/
    'color': 'blue',
   /* 'font-size': 'small'*/
    }


    /* Values for Dropdown (DropDownMySelect.js)  */
    const optionPeriod = [
      { value: '1', label: '2H23' },
      { value: '2', label: '1H23' }
      
    ];
    const handleChangePeriod = (selectedOptionPeriod) => {
      setSelectedOption(selectedOptionPeriod);
    };
    const [selectedOptionPeriod, setSelectedOptionPeriod] = useState(""); 

    const options = [
      { value: '1', label: 'Andrew Birse' },
      { value: '2', label: 'Bruce Aronow' },
      { value: '3', label: 'Us Large Cap Growth' }
    ];
    const [selectedOption, setSelectedOption] = useState(""); 
   
    const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
    };
  
    // Return JSX code
   // <h1>I am User</h1>
     //   <p> We Work: {WorkDays} days a week </p>  
    return (
   <div style={style}>
         <NavbarHome/>
       <Navbar/>
       <br/>
       <div>
        <table>
          <tr>
            <td> 
            <DropdownMySelect options= {optionPeriod} selectedOption={selectedOptionPeriod} handleChange={handleChangePeriod} />
            </td>
            <td>
            <DropdownMySelect options= {options} selectedOption={selectedOption} handleChange={handleChange} />
              </td>
            </tr>
          </table>
      
       
         </div>
      

      <HomeDataGrid/>
         
    </div>
    );
    
};

export default App;
