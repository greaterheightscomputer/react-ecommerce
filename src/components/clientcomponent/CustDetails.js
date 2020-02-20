import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { ecommerces, detailProduct } from '../clientcomponent/data';
import { addToCartAction } from '../../actions/cart';

export  class CustDetails extends Component {    
    state = {                        
        products: [],
        detailProduct: detailProduct,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0        
    };     
    getItem = (id) => { //utility function
        const product = this.props.ecommerces.find((item) => item.id === id);
        // const product = ecommerces.find((item) => item.id === id);
        return product;        
    };   
    addToCart = (product)=>{
        // console.log("clicked on Product: ", product);
           let tempProducts = [...this.props.ecommerces]  
        //    let tempProducts = [...ecommerces]  
           const productIndex = tempProducts.findIndex(p => p.id === product.id);        
           product = tempProducts[productIndex];        
        //    product.inCart=true;  
           product.count=1;
           const price = product.amount;
           product.total=price;  

        //    console.log(product);   
           this.props.addToCartAction(product);
           this.setState({
               cart: product
           },
           () => {
                //    console.log(this.state.cart); 
                this.addTotals();
           })              
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
        const id =  this.props.match.params.id; //"-LynLz9jYS05Qm5pktIU" //"-LynLz9jYS05Qm5pktHJ"; //this.props.match.params.id; 
        // const {description, amount, imageUrl, inCart, info, company, stock} = detailProduct.find((product) =>{ return product.id === id}); 
        const { description, category, item, amount, image, imageUrl, stock, company, info, count, inCart, total, createdAt} = this.props.ecommerces.find((product) =>{ return product.id === id});
        // const { description, category, item, amount, image, imageUrl, stock, company, info, count, inCart, total, createdAt} = ecommerces.find((product) =>{ return product.id === id});                 
        // console.log(inCart);
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
                                 <Link to="/cart"                                   
                                    className="button button__custheader button--cart"                                    
                                    onClick={() =>{ 
                                        // this.openModal(id);
                                        this.addToCart({id, description, category, item, amount, image, imageUrl, stock, company, info, count, inCart, total, createdAt}); 
                                        // console.log(inCart);
                                    }}
                                        disabled={inCart ? true : false}
                                    >
                                        {inCart===true ? "inCart" : "add to cart"}                                    
                                   </Link>                                                                   
                                </div>
                            </div>
                        </div>
                      </div>
             );
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

export default connect(mapStateToProps, mapDispatchToProps)(CustDetails);
