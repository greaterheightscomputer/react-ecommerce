import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from "redux";
import { ProductConsumer } from './context';
import CustListItem from '../../components/clientcomponent/CustListItem';
import CustTitle from '../../components/clientcomponent/CustTitle';
import { ecommerces, detailProduct } from '../clientcomponent/data';
import CustCart from '../cart/CustCart';
import { addToCartAction } from '../../actions/cart';

export  class CustList extends Component {    
    
    state = {        
        products: [],        
        detailProduct: detailProduct,
        cart: [{
            id:'-LynLz9jYS05Qm5pktMQ',
            description: 'Japan Shoe', 
            category: 'Men', 
            item: 'Men Footwear', 
            amount: 4150000, 
            image: 'shoe.png', 
            imageUrl: '../images/men_shoe1.jpg', 
            stock: 10, 
            company: 'Japan Company Ltd.',
            info:'The product is made for men who love and desirer of good quantity foot wear product. Our product has been in exist for 50 years now with the same high quantity materials and products. We have our customers global continuely demanding for our high product. The shipment of our product to any part of the world behind 24 hours of purchaseThe product is made for men who love and desirer of good quantity foot wear product. Our product has been in exist for 50 years now with the same high quantity materials and products. We have our customers global continuely demanding for our high product. The shipment of our product to any part of the world behind 24 hours of purchase',
            inCart: false,
            count: 0,
            total: 0,
            createdAt:1000
        }
    ],
        
    }
        
    setProducts = () => {        
        let tempProducts = [];                      
        tempProducts = ecommerces;                         
        this.setState(() => {
            return { products: tempProducts };
        });
    };
    
    addToCart = (product)=>{
    // //     // console.log("clicked on Product: ", product);
        let tempProducts = [...ecommerces]  
        const productIndex = tempProducts.findIndex(p => p.id === product.id);        
        product = tempProducts[productIndex];        
        product.inCart=true;  
        product.count=1;
        const price = product.amount;
        product.total=price;  
        console.log(product);
        this.props.addToCartAction(product);
         console.log(this.state.cart);        
    };      
    
    render() {                  
        
        return (                    
            <div className="content-container">
            <ul>
                {/*
                    // this.state.cart.map(c => 
                    this.props.cart.map(c => 
                        <li>{c.description} | Units {c.count} | inCart:{c.inCart} | Price:{c.amount}
                        | Total:{c.amount}
                        </li>)                        
                */}
            </ul>
                <CustTitle name="our" title="products" />
                <div className="list-body">
                    <div className="list-items">
                    <ProductConsumer>
                        {value =>                                                                      
                            this.props.ecommerces.length === 0 ? (
                            // ecommerces.length === 0 ? (                                
                                // value.products.length === 0 ? (        
                                <div className="list-item list-item--message">
                                    <span>No Products</span>
                                </div>
                            ) : 
                                (
                                this.props.ecommerces.map((product) =>{
                                // ecommerces.map((product) =>{
                                    // value.products.map((product) =>{
                                    return <CustListItem
                                            key={product.id} product={product}                                                                                       
                                            // addToCart={this.addToCart}                                              
                                />                                                                                                                 
                            }))                                                            
                        }
                    </ProductConsumer>                                                                         
                    </div>                                   
                </div>                           
            </div>                         
        )                
    }
}

const mapStateToProps = (state) => {            
    return {                        
        ecommerces: state.ecommerces,
        cart: state.cart        
    };    
}
const mapDispatchToProps = (dispatch) => ({    
    addToCartAction: (product) => dispatch(addToCartAction(product))
    });

export default connect(mapStateToProps, mapDispatchToProps)(CustList);

