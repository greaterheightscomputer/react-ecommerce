import React from 'react';
import numeral from 'numeral';

export default function CartItem({ item, value}) {    
    const {id, description, imageUrl, amount, total, count } =  item; //.find((itm)=>{return itm.id === id });
    // const id = item.id;
    const { increment, decrement, removeItem } = value;
    console.log(item);   
    // console.log(increment); 
    return (
                
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={imageUrl} 
                        style={{ width:"5rem", height:"5rem" }}
                                className="img-fluid"
                                alt="product"
                            />
                        </div>
                        <div className="col-10 mx-auto col-lg-2">                
                            <span className="d-lg-none">product : </span>
                            {description}
                        </div> 
                        <div className="col-10 mx-auto col-lg-2">                
                            <span className="d-lg-none">price : </span>
                            {'₦'+numeral(amount / 100).format('0,0.00')}                    
                        </div> 
                        <div  className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                            <div className="d-flex justify-content-center">
                                <span 
                                    className="btn btn-black mx-1" 
                                    onClick={()=>{
                                        // console.log('decrement of item');
                                        decrement(id)
                                    }}
                                >   
                                    -
                                </span>
                                <span 
                                    className="btn btn-black mx-1"                         
                                >   
                                    {count}
                                </span>
                                <span 
                                    className="btn btn-black mx-1" 
                                    onClick={()=> {
                                        // console.log('increment of item');
                                        increment(id)
                                    }}
                                >   
                                    +
                                </span>
                            </div>
                        </div>
                        {/**/}
                        <div className="col-10 mx-auto col-lg-2">                
                            <div className="cart-icon" onClick={()=>{
                                // console.log('remove of item');
                                removeItem(id)
                            }}
                            >
                                <i className="fas fa-trash"/>
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">                
                            <strong>item total : {'₦'+numeral(total / 100).format('0,0.00')} </strong>                
                        </div>
                    </div>
        )
    
}


