import React from 'react';
import { Link } from 'react-router-dom';

const AdminListItem = ({ id, description, amount, imageUrl, stock }) => (          
    <div>
        <Link to={`/edit/${id}`}>
            <img  src={imageUrl} height="200" width="150" />            
            <h3>{description}</h3>
            <p>{amount} - {stock} pieces</p>
        </Link>   
    </div>
);

export default AdminListItem;