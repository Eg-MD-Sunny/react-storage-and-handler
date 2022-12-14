import React from 'react';
import { addTodb, removeFromDb } from '../utilities/fakedb';
import './Showdata.css';

const Showdata = (props) => {
    const {name,price,_id} = props.cosmetic;
    const addToCart = (_id) =>{
        // console.log('item added',_id)
        // localStorage.setItem(_id,1)
      
        addTodb(_id);
    }
    // const addToCartWithParam = ()=>addToCart(_id);


    const revomeFromCart = _id =>{
        //  console.log('Removing', _id);
         removeFromDb(_id);
    }

    return (
        <div className="product">
            <h2>Buy This: {name}</h2>
            <p>Only For: ${price}</p>
            <p><small>It has id: {_id}</small></p>
            <button onClick={()=>addToCart(_id)}>Add to Cart</button>
            <button onClick={()=>revomeFromCart(_id)}>Remove</button>
            {/* <button onClick={()=>addToCart(_id)} style={{Margin:'15px'}}>Add to Cart: shortcut</button> */}
            {/* <button onClick={()=>addToCart(_id)}>Purchase</button> */}
        </div>
    );
};

export default Showdata;