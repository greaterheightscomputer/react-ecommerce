import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const AdminListItem = ({ id, description, amount, imageUrl, stock}) => (          
    <div>
        <Link to={`/edit/${id}`}>
            <img  src={imageUrl} height="200" width="150" /> }                       
            <h3>{description}</h3>
            <div> 
                {'₦'+numeral(amount / 100).format('0,0.00')}             
                {stock === "0" ? (<p>Out of stock</p>) : (<p>{`${stock} piece(s) available`}</p>)}                            
            </div>
            
            
               
        </Link>   
    </div>
);

export default AdminListItem;