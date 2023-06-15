import React, { Component } from 'react';
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
  /*  'textAlign': 'center',*/
    'color': 'green'
    }
  
    // Return JSX code
    return (
   <div style={style}>
        <h1>I am User</h1>
        <p> We Work: {WorkDays} days a week </p>
    </div>
    );
}
}