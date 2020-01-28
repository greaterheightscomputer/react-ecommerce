import React from 'react';
import CustDetail from "../components/CustDetail";


//Get visible ecommerce -> this function will match the ecommerce array object with the filters object
export default (id, ecommerces) => {
    ecommerces.filter((ecommerce) => {    
        return id === ecommerce.id;
    })
};


