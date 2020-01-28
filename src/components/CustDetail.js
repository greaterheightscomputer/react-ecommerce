import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const CustDetail = ({ id, description, amount, imageUrl, inCart, stock } = ecommerce) => {
    return (                    
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
                
    </div>
)
};

export default (CustDetail);

// <p>{description}</p>
                    {/*<img  src={imageUrl} height="200" width="150" />        
            <h3>{description}</h3>
            <div> 
                {'₦'+numeral(amount / 100).format('0,0.00')}             
                {stock === "0" ? (<p>Out of stock</p>) : (<p>{`${stock} piece(s) available`}</p>)}                            
</div>*/}