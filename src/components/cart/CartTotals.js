import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export default class CartTotals extends Component {
    onClearCart = () => {             
        this.props.clearCart(); 
    };
    render() {  
        const { cartSubTotal, cartTax, cartTotal } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                                type="button" onClick={()=>{console.log('clear the cart')}}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="cust-list-product">subtotal : </span>
                            <strong>{'₦'+numeral(cartSubTotal / 100).format('0,0.00')}</strong>
                        </h5>
                        <h5>
                            <span className="cust-list-product">subtotal : </span>
                            <strong>{'₦'+numeral(cartTax / 100).format('0,0.00')}</strong>
                        </h5>
                        <h5>
                            <span className="cust-list-product">subtotal : </span>
                            <strong>{'₦'+numeral(cartTotal / 100).format('0,0.00')}</strong>
                        </h5>
                    </div>
                </div>                
            </div>
        )
    }
}

