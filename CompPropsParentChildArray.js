import React from 'react';

export default function App(props){
    const ListOfArrayNumbers = props.menuNumbers;
    const mapListOfNumbers = ListOfArrayNumbers.map((Numbers) => <li>{Numbers} </li>) ;
    return(
        mapListOfNumbers

    );
}
