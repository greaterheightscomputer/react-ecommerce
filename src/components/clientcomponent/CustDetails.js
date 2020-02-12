import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { ecommerces, detailProduct } from '../clientcomponent/data';

export  class CustDetails extends Component {    
    state = {                        
        products: [],
        detailProduct: detailProduct,
        cart: [],
        // modalOpen: false,
        // modalProduct: detailProduct  
    };     
    getItem = (id) => { //utility function
        // const product = this.props.ecommerces.find((item) => item.id === id);
        const product = ecommerces.find((item) => item.id === id);
        return product;        
    };   
    addToCart = (id) => {
        // let tempProducts = [...this.props.ecommerces];
        let tempProducts = [...ecommerces];
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
        });
    };
    // openModal = (id) => {
    //     const product = this.getItem(id);
    //     this.setState(() => {
    //         return { 
    //             modalProduct: product,                
    //             modalOpen: true
    //          }
    //     })
    // };
    
    render() {                   
        const id = this.props.match.params.id; //"-LynLz9jYS05Qm5pktIU" //"-LynLz9jYS05Qm5pktHJ"; //this.props.match.params.id; 
        // const {description, amount, imageUrl, inCart, info, company, stock} = detailProduct.find((product) =>{ return product.id === id}); 
        const { description, amount, imageUrl, inCart, info, company, stock} = this.props.ecommerces.find((product) =>{ return product.id === id});
        // const { description, amount, imageUrl, inCart, info, company, stock} = ecommerces.find((product) =>{ return product.id === id}); 
        return (
            <div className="container py-2">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text--fontO txt-size--one text-blue my-2">
                                <h1>{description}</h1>
                            </div>                        
                        </div>
                        {/* end title */}
                        {/*product info*/}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                                <img src={imageUrl} className="img-fluid" alt="product" />
                            </div>
                            {/*product text*/}
                            <div className="col-10 mx-auto col-md-6 my-3 text--fontO txt-size--two text-capitalize">
                                <h1>model : {description}</h1>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2 cust-list-product txt-size--two">
                                    made by : <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue txt-size--two">
                                    <strong>
                                        price : <span>{'₦'+numeral(amount / 100).format('0,0.00')}</span>
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some into about product:
                                </p>
                                <p className="text-muted lead txt-size--three">{info}</p>
                                {/*buttons*/}
                                <div>
                                    <Link to="/" className="button button__custheader button--link button--detail">
                                        back to products                                        
                                    </Link>
                                 <button
                                    className="button button__custheader button--cart"
                                    disabled={inCart ? true : false}
                                    onClick={() =>{ 
                                        // this.openModal(id);
                                        this.addToCart(id);                                        
                                    }}
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

const mapStateToProps = (state) => {                
    return {                        
        ecommerces: state.ecommerces        
    };    
}
export default connect(mapStateToProps)(CustDetails);
