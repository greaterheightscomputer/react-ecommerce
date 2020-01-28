import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustListItem from './CustListItem';
import CustTitle from './CustTitle';
import detailProduct from './data';
import CustProductModal  from './CustProductModal';
import CustDetails from './CustDetails';

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
    increment = (id) => {
        console.log('this is increment function');
    };
    decrement = (id) => {
        console.log('this is decrement function');
    };
    removeItem = (id) => {
        console.log('item removed function');
    };
    clearCart = () => {
        console.log('clear the cart');
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
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {        
        ecommerces: state.ecommerces    
    };
}

export default connect(mapStateToProps)(CustList);

