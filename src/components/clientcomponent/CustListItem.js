import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { ProductConsumer } from '../clientcomponent/context';
// import PropTypes from 'prop-types';

export default class CustListItem extends Component {
        
    render() {                                                     
        const { id, description, category, item, amount, image, imageUrl, stock, company, info, inCart, count, total, createdAt } = this.props.product;                                  
        // console.log(inCart);
        
        return (                       
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card card-footer">
                <ProductConsumer>                                
                    {(value) =>                         
                        (                        
                        <div 
                        className="img-container p5"
                        // onClick={() => { value.handleDetail(id); }}
                        >
                        <Link to={`/details/${id}`}>
                            <img  src={imageUrl} alt="product" className="card-img-top" height="200" width="80" />
                        </Link>                        
                        <button
                            className="cart-btn"                                                                                 
                            onClick={() => { 
                                value.openModal(id);                                                                                                                                        
                                // this.props.addToCart({id, description, category, item, amount, image, imageUrl, stock, company, info, count, inCart, total, createdAt});
                                // this.props.addToCart({id, description, category, item, amount, image, imageUrl, stock, company, info, count:1, inCart:true, total:amount, createdAt});                                                                
                                value.addToCart({id, description, category, item, amount, image, imageUrl, stock, company, info, count, inCart, total, createdAt});                                                                
                            }}                            
                            disabled = { inCart ? true : false}   
                        >
                        {
                            inCart ? (
                            <p className="text-capitalize mb-0" >                        
                                incart
                            </p>
                            ) : 
                            (
                             <i className="fas fa-cart-plus"  />
                            ) 
                        }
                        </button>                        
                    </div>
                    )}                    
                </ProductConsumer>
                    {/*card footer*/}
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <p className="align-self-center text-size mb-0">{description}</p>
                        <h5 className="text-blue text-size font-italic mb-0">{'₦'+numeral(amount / 100).format('0,0.00')}</h5>
                    </div>                    
                </div>                                                                                
            </div>                        
        );
        
    }
}

// CustListItem.propTypes = {
//     custListItem:PropTypes.shape({
//         id: PropTypes.number,
//         description: PropTypes.string,
//         amount: PropTypes.number,
//         imageUrl: PropTypes.object,
//         inCart: PropTypes.bool,
//         stock: PropTypes.number
//     }).isRequired
// };

