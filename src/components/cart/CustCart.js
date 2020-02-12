import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustTitle from '../../components/clientcomponent/CustTitle';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../clientcomponent/context';

export class CustCart extends Component {                         
    render() {                
        return (            
            <section>                        
            
            <ProductConsumer>                                               
                {(value) =>    {                                                                                                
                    console.log(value);                      
                    console.log(this.props.cart);  
                    if(this.props.cart.length > 0){                                                
                        return ( 
                            <div>
                                <CustTitle name="your" title="cart" />
                                <CartColumns />  
                                <CartList cart={this.props.cart} value={value}  />
                            {/*<CartTotals cart={this.state} />*/}                                                
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
        ecommerces: state.ecommerces,
        cart: state.cart        
    };    
}

export default connect(mapStateToProps)(CustCart);