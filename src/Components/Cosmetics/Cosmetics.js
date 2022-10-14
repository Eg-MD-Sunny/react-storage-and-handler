import React from 'react';
import { add, devide, subtract } from '../utilities/utilities';
//import add from '../utilities/utilities';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first,second);
    const result = devide(first,second)
    const sub = subtract(first,second)
    return (
        <div>
            <h1>Hellow to my cosmetics store</h1>
            <p>Total:{total} and Result:{result}</p>
            <p>Difference:{sub}</p>
            
        </div>
    );
};

export default Cosmetics;