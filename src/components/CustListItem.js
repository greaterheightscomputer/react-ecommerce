import React from 'react';

const CustListItem = ({ description, amount, imageUrl, stock }) => (
    <div>
            <img  src={imageUrl} height="200" width="150" />        
            <h3>{description}</h3>
            <p>{amount} - {stock} pieces</p>            
           
    </div>
);

export default CustListItem;