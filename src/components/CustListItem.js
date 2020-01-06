import React from 'react';
import numeral from 'numeral';

const CustListItem = ({ description, amount, imageUrl, stock }) => (
    <div>
            <img  src={imageUrl} height="200" width="150" />        
            <h3>{description}</h3>
            <div> 
                {'₦'+numeral(amount / 100).format('0,0.00')}             
                {stock === "0" ? (<p>Out of stock</p>) : (<p>{`${stock} piece(s) available`}</p>)}                            
            </div>
    </div>
);

export default CustListItem;