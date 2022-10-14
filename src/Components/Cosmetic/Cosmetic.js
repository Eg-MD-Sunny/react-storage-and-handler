import React, { useEffect, useState } from 'react';
import Showdata from '../Showdata/Showdata';

const Cosmetic = () => {
    // const cosmetics = [
    //     {id:1, name: 'Alta', price:100},
    //     {id:2, name: 'Palis', price:200},
    //     {id:3, name: 'Malis', price:300},
    //     {id:4, name: 'Balis', price:400},
    //     {id:5, name: 'Nalis', price:500},
    // ]

    // const cosmetics = [
    //         {
    //           "_id": "63499514943f11f6a0155c9a",
    //           "price": 288,
    //           "name": "Aline Hernandez"
    //         },
    //         {
    //           "_id": "63499514e52e011cc294cad1",
    //           "price": 242,
    //           "name": "Dyer Olsen"
    //         },
    //         {
    //           "_id": "634995145c6252833fc5a151",
    //           "price": 51,
    //           "name": "Hayden Rosales"
    //         },
    //         {
    //           "_id": "63499514dbf2f8ea268886c9",
    //           "price": 311,
    //           "name": "Silvia Woods"
    //         },
    //         {
    //           "_id": "634995143a5ad52097bda673",
    //           "price": 270,
    //           "name": "Calhoun Holcomb"
    //         },
    //         {
    //           "_id": "634995141c0098675a9b5ad9",
    //           "price": 164,
    //           "name": "Cochran Johnson"
    //         }
    // ]

    
    const [cosmetics, setCosmetics] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])
    return (
        <div>
            <h1>Welcome to my cosmetic store</h1>
            {
                cosmetics.map(cosmetic => <Showdata 
                                           key={cosmetic.id}
                                           cosmetic={cosmetic} 
                                          ></Showdata>)
            }
        </div>
    );
};

export default Cosmetic;