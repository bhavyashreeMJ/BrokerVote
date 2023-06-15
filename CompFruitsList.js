import React from 'react';
export default function App() {
    const FruitsArray =["Apple", "Banana","Orange"];
    const FruitsList = FruitsArray.map((fruits) => <li>{fruits}</li>);

    return(
        FruitsList
    );
        
}