import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../clientcomponent/context';
import numeral from 'numeral';
import { detailProduct } from './data';

export default class CustProductModal extends Component {  
    render() {        
        // const id ="-LynLz9jYS05Qm5pktHJ";   //this.props.modalProduct.id; //'-LynLz9jYS05Qm5pktHJ';                
        // const modalOpen = this.props.onState;                        
        // const { description, amount, imageUrl } = this.props.modalProduct;//.find((product) =>{ return product.id === id});
        // // console.log(this.props.modalProduct)      
       return (
        <ProductConsumer>
            {(value) => {                                
                const {modalOpen, closeModal} = value;                                    
                // const id="-LynLz9jYS05Qm5pktHJ";
                // const {imageUrl, description, amount} = detailProduct.find((product) =>{ return product.id === id});
                const {imageUrl, description, amount} = value.modalProduct;                 

                if(!modalOpen){
                 return null;
                }    
                else {
                    return (
                        <div className="cust-modal">                        
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5 className="txt-size--one">item added to the cart</h5>
                                        <img src={imageUrl} className="img-fluid" alt="product"/>
                                        <h5 className="txt-size--one">{description}</h5>
                                        <h5 className="text-muted txt-size--one">price : {'₦'+numeral(amount / 100).format('0,0.00')}</h5>                                
                                        <Link to="/" className="button button__custheader button--detail">
                                            <div onClick={() => { closeModal; }
                                            
                                            }
                                            >
                                                    continue shopping                                                    
                                               </div>                                    
                                        </Link>
                                        <Link to="/cart" className="button button__custheader button--cart">
                                            <div onClick={()=>{ closeModal }}>
                                                go to cart
                                            </div>
                                        </Link>
                                        
                                    </div>
                            </div>                
                    </div>
                    </div>        
                    )
                }        
            }
        }
        </ProductConsumer>    
       );
        }
    }


// const mapStateToProps = (state, props) => {    
//     return {
//         ecommerces: state.ecommerces
//     }
// }

// export default connect(mapStateToProps)(CustProductModal); 