import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import detailProduct, {ecommerces} from './data';

export class CustDetails extends Component {    
    state = {                        
        products: [],
        detailProduct: detailProduct,
        cart: []  
    }; 
    getItem = (id) => { //utility function
        const product = this.props.ecommerces.find((item) => item.id === id);
        return product;        
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
    };
        
    render() {           
        const id = this.props.match.params.id; // '-LynK8BjzfvQRt_4oswM';        
        // const {description, amount, imageUrl, inCart, info, company, stock} = this.state.detailProduct.find((product) =>{ 
        const { description, amount, imageUrl, inCart, info, company, stock} = this.props.ecommerces.find((product) =>{ return product.id === id});                  
        return (
            <div className="content-container py-5">    
            {/* description */}
                <div className="row">                
                    <div className="col-10 mx-auto text-center text-ble my-5 text--fontO">
                        <h1>{description}</h1>
                    </div>
                </div>
            {/* end */}
            {/*product info*/}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={imageUrl} className="img-fluid" alt="product" />
                    </div>
                    {/*product text*/}
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text--fontO"> 
                        <h2 className="txt-size--one">product name: {description}</h2>
                        <h4 className="text-uppercase text-muted mt-3 mb-2 txt-size--two text--fontP">
                            made by : <span className="text-uppercase">{company}</span>
                        </h4>
                        <h4 className="text-blue txt-size--two">
                            <strong>
                                price: {'₦'+numeral(amount / 100).format('0,0.00')}
                            </strong>                            
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0 txt-size--three">
                            some info about product:
                        </p>
                        <p className="text-muted lead txt-size--three">{info}</p>
                        {/* buttons */}
                        <div>
                            <Link to="/" className="button button__custheader button--detail">
                                back to products
                            </Link>
                            <button 
                                className="button button__custheader button--cart"
                                disabled={inCart ? true : false}
                                onClick={() => { this.addToCart(id); }}
                            >
                                {inCart ? "inCart" : "add to cart"}
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {    
    return {
        // ecommerces: state.ecommerces,
        ecommerces: ecommerces        
    }
}

export default connect(mapStateToProps)(CustDetails); 