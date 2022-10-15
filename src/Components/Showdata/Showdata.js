import React from 'react';
import './Showdata.css';

const Showdata = (props) => {
    const {name,price,_id} = props.cosmetic;
    const addToCart = (_id) =>{
        console.log('item added',_id)
    }
    return (
        <div className="product">
            <h2>Buy This: {name}</h2>
            <p>Only For: ${price}</p>
            <p><small>It has id: {_id}</small></p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default Showdata;