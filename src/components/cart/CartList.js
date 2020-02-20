import React from 'react'
import CartItem from './CartItem';

export const CartList=({cart, addTotals, increment})=>{         
    // console.log(cart)         
    return (        
        <div className="container-fluid">  
            {cart.map(item => {                          
                  return <CartItem key={item.id} item={item}                                     
                                addTotals={addTotals}
                                increment={increment}
                  />
                })                               
            }            
        </div>        
    )
}

export default CartList;