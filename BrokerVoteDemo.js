import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import HomeDataGrid from './Components/GridDemo';
import NavbarHome from './Components/NavbarHome';



export default class App extends Component {
state = {
    MyDays: [
        { id: '123s', Day: 'Monday' },
        { id: '234r', Day: 'Saturday' },
        { id: '12d5', Day: 'Sunday' },
        { id: '12d6', Day: 'Tuesday' },
        { id: '12d6', Day: 'Tuesday' }
    ]
}
  
render() {
    const WorkDays = this.state.MyDays.length
    const style = {
    'color': 'green'
    }
  
    // Return JSX code
   // <h1>I am User</h1>
     //   <p> We Work: {WorkDays} days a week </p>  
    return (
   <div style={style}>
         <NavbarHome/>
       <Navbar/>
      <HomeDataGrid/>
         
    </div>
    );
    
}
}