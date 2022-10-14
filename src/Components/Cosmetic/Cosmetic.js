import React from 'react';

const Cosmetic = () => {
    const cosmetics = [
        {id:1, name: 'Alta', price:100},
        {id:2, name: 'Palis', price:200},
        {id:3, name: 'Malis', price:300},
        {id:4, name: 'Balis', price:400},
        {id:5, name: 'Nalis', price:500},
    ]
    return (
        <div>
            <h1>Welcome to my cosmetic store</h1>
            {
                cosmetics.map(cosmetic => console.log(cosmetic))
            }
        </div>
    );
};

export default Cosmetic;