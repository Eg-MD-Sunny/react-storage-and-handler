import React from 'react';
import { add, multiply } from '../utilities/utilities';


const Shoes = () => {
    const first = 10;
    const second = 5;
    const result = multiply(first,second)
    const sum = add(first,second);
    return (
        <div>
            <h3>This is shoes Component</h3>
            <p>Result: {result} and total: {sum}</p>    
        </div>
    );
};

export default Shoes;