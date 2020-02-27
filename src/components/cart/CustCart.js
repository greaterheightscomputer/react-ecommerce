import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustTitle from '../../components/clientcomponent/CustTitle';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../clientcomponent/context';
import { ecommerces, detailProduct } from '../clientcomponent/data';
import { removeItemAction, incrementItemAction } from '../../actions/cart';

export class CustCart extends Component {   
    state = {        
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };   
    componentDidMount(){
        this.addTotals();  
    };
        
    addTotals = () => {
        let subTotal = 0;
        this.props.cart.map((item) => (subTotal += item.total));
        // console.log(subTotal);
        const tempTax = subTotal * 0.075; //7.5%
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
                }
            })
    };    
    
    render() {                
        return (            
            <section> 
            <ProductConsumer>                                               
                {(value) =>    {                                                                                                
                    // console.log(value);                      
                    // console.log(this.props.cart);  
                    if(this.props.cart.length > 0){   
                    // if(value.cart.length > 0){                                                
                        return ( 
                            <div>
                                <CustTitle name="your" title="cart" />
                                <CartColumns />  
                                <CartList 
                                    cart={this.props.cart}                                    
                                    addTotals={this.addTotals}
                                />
                                <CartTotals cost={this.state} history={this.props.history} />
                             </div>                                                              
                            )        
                        }
                        else{
                            return (
                                <EmptyCart/>
                            )
                        }
                    }
                }
            </ProductConsumer>
            </section>
            )             
    }
}
  
const mapStateToProps = (state) => {               
    return {                                
        cart: state.cart
    };    
}
const mapDispatchToProps = (dispatch) => ({    
    removeItemAction: (cart) => dispatch(removeItemAction(cart)),    
    // removeItemAction: ({id}) => dispatch(removeItemAction({id}))    
    incrementItemAction: (cart) => dispatch(incrementItemAction(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustCart);