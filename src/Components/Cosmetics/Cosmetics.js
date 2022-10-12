import React from 'react';
import { add, devide } from '../utilities/utilities';
//import add from '../utilities/utilities';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first,second);
    const result = devide(first,second)
    return (
        <div>
            <h1>Hellow to my cosmetics store</h1>
            <p>Total:{total} and Result:{result}</p>
        </div>
    );
};

export default Cosmetics;