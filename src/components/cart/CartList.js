import React from 'react'
import CartItem from './CartItem';

export default function CartList(props) {
    const cart = props.cart;    
    console.log(cart)     
    
    return (
        <div className="container-fluid">
            {
                props.cart.map((item) => {       
                    return <CartItem key={item.id} {...item} />
                })
            }            
        </div>
    )
}
