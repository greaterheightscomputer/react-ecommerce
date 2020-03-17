import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import selectCartDB from '../../selectors/cart-db';

const CartDBListId = (props) => {        
    const cartId = props.cartdb.id;
    // console.log(props.cartdb)         
    return(       
        <Link className="list-item" to={`/cartdb_id/${cartId}`}>        
        <div>        
            <h3 className="list-item__title"> {cartId} <br/> </h3>             
        </div>                              
        </Link>       
    )};

export default CartDBListId;

