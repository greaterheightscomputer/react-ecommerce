import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';
import numeral from 'numeral';
import { removeCartAction } from '../../actions/cart';

export function CartTotals(props) {
    const { cartSubTotal, cartTax, cartTotal } = props.cost;    
    const history  = props.history;
    // console.log(history);
    // const  clearCart  = removeCartAction(props.cart);
    // console.log(clearCart);
            
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-5 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5 text--fontO txt-size--three" 
                            type="button" onClick={()=>{                                
                                props.removeCartAction(props.cart);                                                                                      
                            }}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="cust-list-product txt-size--three">subtotal : </span>
                        <strong className="txt-size--three">{'₦'+numeral(cartSubTotal / 100).format('0,0.00')}</strong>
                    </h5>
                    <h5>
                        <span className="cust-list-product txt-size--three">tax : </span>
                        <strong className="txt-size--three">{'₦'+numeral(cartTax / 100).format('0,0.00')}</strong>
                    </h5>
                    <h5>
                        <span className="cust-list-product txt-size--three">total : </span>
                        <strong className="txt-size--three">{'₦'+numeral(cartTotal / 100).format('0,0.00')}</strong>
                    </h5>
                        <PayPalButton total={cartTotal} history={history} />                        
                </div>
            </div>                
        </div>
        )
}

const mapStateToProps = (state, props) => { 
    return {                             
        cart: state.cart.find((cart) => cart === cart)       
    };    
}
const mapDispatchToProps = (dispatch) => ({    
    removeCartAction: (cart) => dispatch(removeCartAction(cart))    
    });

export default connect(mapStateToProps, mapDispatchToProps)(CartTotals);