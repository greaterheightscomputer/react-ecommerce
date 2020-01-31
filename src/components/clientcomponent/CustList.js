import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustListItem from '../../components/clientcomponent/CustListItem';
import CustTitle from '../../components/clientcomponent/CustTitle';
import detailProduct, {ecommerces} from '../../components/clientcomponent/data';
import CustProductModal  from '../../components/clientcomponent/CustProductModal';
import CustCart from '../cart/CustCart';

export class CustList extends Component {    
    state = {        
        products: [],        
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    getItem = (id) => {
        const product = this.props.ecommerces.find((item) => item.id === id);
        return product;        
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })        
    };
    addToCart = (id) => {
        let tempProducts = [...this.props.ecommerces];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];        
        product.inCart = true;
        product.count = 1;
        const price = product.amount;
        product.total = price;
        
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            };
        }, 
        () => {             
            console.log(this.state)                        
        }
        );
        // console.log(`this is add to card ${id}`);
    };
    onSetCart = ({cart}=this.state.cart) => {             
        this.props.setCart(cart); 
    }; 
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { 
                modalProduct: product,                
                modalOpen: true
             }
        })
    };
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    };
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map((item) => (subTotal += item.total));
        const tempTax = subTotal * 0.1; //10%
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    // increment = (id) => {
    //     console.log('this is increment function');
    // };
    // decrement = (id) => {
    //     console.log('this is decrement function');
    // };
    // removeItem = (id) => {
    //     console.log('item removed function');
    // };
    clearCart = () => {
        // console.log('clear the cart');
        this.setState(()=> {
            return { 
                cart: [],
                cartSubTotal: 0,
                cartTax: 0,
                cartTotal: 0};            
        }, ()=> {
            //    this.setProducts();
        })
    };
    render() {                               
        return (
            <div className="py-2">        
            <div className="content-container">
                <CustTitle                  
                        name="our" title="products"
                />
                <div className="row">
                    {
                        this.props.ecommerces.length === 0 ? (
                            <div className="list-item list-item--message">
                                    <span>No Products</span>
                                </div>

                        ) : 
                            (
                            this.props.ecommerces.map((ecommerce) =>{
                                return <CustListItem
                                        key={ecommerce.id} {...ecommerce} 
                                        handleDetail={this.handleDetail}
                                        addToCart={this.addToCart}                                                                
                                        openModal={this.openModal}
                                        cart={this.state.cart}  
                                        onSetCart={this.onSetCart}                                                                          
                                />                                      
                        }))                                                                                        
                    }                                                
                </div>                            
            </div>     
            <CustProductModal                                        
                onState={this.state.modalOpen}                                        
                modalProduct={this.state.modalProduct}                    
                closeModal={this.closeModal} 
            /> 
            {this.state.cart.map((item) => {                
                return <CustCart 
                        key={item.id} {...item}
                        cart={this.state.cart}
                    />                            
            })}
        </div>        
        )
    }
}

const mapStateToProps = (state, props) => {            
    return {                        
        // ecommerces: state.ecommerces
        ecommerces: ecommerces
    };    
}

const mapDispatchToProps = (dispatch, props) => ({    
    setCart: (cart) => dispatch(setCart(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustList);

