import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';


export class CustListItem extends Component {
    
    render() {                
        const {id, description, amount, imageUrl, inCart, stock } = this.props;            

        return (                       
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card card-footer">
                    <div 
                        className="img-container p5"
                        onClick={() => { this.props.handleDetail(id); }}
                    >
                        <Link to={`/details/${id}`}                      
                        >
                            <img  src={imageUrl} alt="product" className="card-img-top" height="180" width="80" />
                        </Link>                        
                        <button
                            className="cart-btn"                                                                                 
                            onClick={() => {                                
                                this.props.openModal(id);
                                this.props.addToCart(id);                                
                            }}                            
                            disabled = { inCart? true : false}
                        >
                        {
                            inCart ? (
                            <p className="text-capitalize mb-0" disabled >                        
                                incart
                            </p>
                            ) : (
                             <i className="fas fa-cart-plus" disabled />
                            ) 
                        }
                        </button>                        
                    </div>
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
const mapStateToProps = (state, props) => {    
    return {    
        ecommerces: state.ecommerces
    };
}

export default connect(mapStateToProps)(CustListItem);