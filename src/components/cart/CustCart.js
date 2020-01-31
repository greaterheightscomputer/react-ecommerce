import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustTitle from '../../components/clientcomponent/CustTitle';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class CustCart extends Component {
    state = {                
        cart: [],      
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
    componentDidMount() {
        this.setState(() => {
            return {        
                cart: [...this.state.cart, this.props.cart]
            }
        })
    };
        
 
    // increment = (id) => {
    //     console.log('this is increment function');
    // };
    // decrement = (id) => {
    //     console.log('this is decrement function');
    // };
    // removeItem = (id) => {
    //     console.log('item removed function');
    // };
    // clearCart = () => {
    //     console.log('clear the cart');
    // };
    
    render() {        
        console.log(this.state.cart);
        
        if (this.state.length > 0) {
            return (            
                <section>                           
                    <CustTitle name="your" title="cart" />
                    <CartColumns />                    
                    <CartList cart={this.state.cart} />                    
                    <CartTotals cart={this.state} />
                </section>
            )     
        }
        else {
            return (
                <EmptyCart />
            )
        }      
    }
}

// const mapStateToProps = (state, props) => {    
//     const cart = props.cart;
//     // console.log(cart)
//     return {        
//         // ecommerces: state.ecommerces,
//         // ecommerces: ecommerces,
//         cart: cart                
//     };
// }

// export default connect(mapStateToProps)(CustCart);