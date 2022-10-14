import React from 'react';

const Showdata = (props) => {
    const {name,price,_id} = props.cosmetic;
    return (
        <div>
            <h2>Buy This: {name}</h2>
            <p>Only For: ${price}</p>
            <p><small>It has id: {_id}</small></p>
        </div>
    );
};

export default Showdata;