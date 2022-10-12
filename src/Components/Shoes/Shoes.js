import React from 'react';
import { multiply } from '../utilities/utilities';


const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first,second)
    return (
        <div>
            <h3>This is shoes Component</h3>
            <p>Result: {result}</p>    
        </div>
    );
};

export default Shoes;