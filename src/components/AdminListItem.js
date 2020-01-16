import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const AdminListItem = ({ id, description, amount, imageUrl, stock}) => (          
    <Link className="list-item"   to={`/edit/${id}`}>        
        <div >
            <img  src={imageUrl} height="200" width="150" />              
            <h3 className="list-item__title"> {description} <br/> </h3>
            <h3 className="list-item__title"> {'₦'+numeral(amount / 100).format('0,0.00')}</h3>
            {stock === "0" ? (<p>Out of stock</p>) : (<p className="list-item__stock">{`${stock} piece(s) available`}</p>)}        
        </div>  
    </Link>       
);

export default AdminListItem;