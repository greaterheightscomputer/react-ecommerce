import React, { Component } from 'react';
import numeral from 'numeral';

export default class CartItem extends Component {
    onIncrementCart = () => {             
        this.props.incrementCart(this.props.id); 
    };
    onDecrementCart = () => {             
        this.props.decrementCart(this.props.id); 
    };
    onRemove = () => {             
        this.props.removeItem(this.props.id); 
    };
    
    render() {
        const { id, description, imageUrl, amount, total, count=0 } = this.props.item
        // console.log(id);
        return (
            <div className="row my-1 text-capitalize text-center">
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
                            onClick={()=>{console.log('decrement item')}}
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
                            onClick={console.log('increment item')}
                        >   
                            +
                        </span>
                    </div>
                </div>
                {/**/}
                <div className="col-10 mx-auto col-lg-2">                
                    <div className="cart-icon" onClick={console.log('remove item')}
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
}

