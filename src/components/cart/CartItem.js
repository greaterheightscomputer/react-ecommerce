import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { removeItemAction, incrementItemAction, decrementItemAction, incrementSizeAction, decrementSizeAction } from '../../actions/cart'; 

export class CartItem extends Component {
    
    componentDidUpdate(){
        this.props.addTotals();
    }    
    render() {
        const {id, description, imageUrl, amount, total, count, size } = this.props.item; //.find((itm)=>{return itm.id === id });
        // console.log(this.props.item);  
        return (                
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-1">
                    <img 
                        src={imageUrl} 
                            style={{ width:"5rem", height:"5rem" }}
                                    className="img-fluid"
                                    alt="product"
                    />
                    </div>
                            <div className="col-10 mx-auto col-lg-1">                
                                <span className="d-lg-none">product : </span>
                                {description}
                            </div> 
                            <div className="col-10 mx-auto col-lg-1">                
                                <span className="d-lg-none">price : </span>
                                {'₦'+numeral(amount / 100).format('0,0.00')}                    
                            </div> 
                        {/*Size*/}
                        <div  className="col-10 mx-auto col-lg-1 my-1 my-lg-0">
                                <div className="d-flex justify-content-center">
                                    <span 
                                        className="btn btn-black mx-1" 
                                        onClick={()=>{
                                            // console.log('decrement of item');
                                            this.props.decrementSizeAction({id});  
                                            // this.props.addTotals();
                                        }}
                                    >   
                                        -
                                    </span>
                                    <span 
                                        className="btn btn-black mx-1"                         
                                    >   
                                        {size}
                                    </span>
                                    <span 
                                        className="btn btn-black mx-1" 
                                        onClick={()=> {
                                            // console.log('increment of item');                                        
                                            this.props.incrementSizeAction({id});  
                                            // this.props.addTotals();
                                        }}
                                    >   
                                        +
                                    </span>
                                </div>
                        </div>                            
                        {/*Quantities*/}
                            <div  className="col-10 mx-auto col-lg-1 my-2 my-lg-0">
                                <div className="d-flex justify-content-center">
                                    <span 
                                        className="btn btn-black mx-1" 
                                        onClick={()=>{
                                            // console.log('decrement of item');
                                            this.props.decrementItemAction({id});  
                                            // this.props.addTotals();
                                        }}
                                    >   
                                        -
                                    </span>
                                    <span 
                                        className="btn btn-black mx-1"                         
                                    >   
                                        {count}
                                    </span>
                                    <span 
                                        className="btn btn-black mx-1" 
                                        onClick={()=> {
                                            // console.log('increment of item');                                        
                                            this.props.incrementItemAction({id});  
                                            // this.props.addTotals();
                                        }}
                                    >   
                                        +
                                    </span>
                                </div>
                        </div>
                            {/**/}
                            <div className="col-10 mx-auto col-lg-1">                
                                <Link to="/cart" className="cart-icon" onClick={()=>{
                                    // console.log('remove of item');                                
                                    this.props.removeItemAction({id});                                  
                                    // this.props.addTotals();
                                }}
                                >
                                    <i className="fas fa-trash"/>
                                </Link>
                            </div>
                            <div className="col-10 mx-auto col-lg-1">                
                                <strong>item total: {'₦'+numeral(total / 100).format('0,0.00')} </strong>                
                            </div>
                        </div>
            )
      
            }
        }

const mapStateToProps = (state, props) => {               
    return {                                
        cart: state.cart.find((cart) => cart === cart)    
        // cart: state.cart.find((cart) => cart.id === cart.id)    
    };    
}
const mapDispatchToProps = (dispatch) => ({        
    removeItemAction: ({id}) => dispatch(removeItemAction({id})),   
    incrementItemAction: ({id}) => dispatch(incrementItemAction({id})),
    decrementItemAction: ({id}) => dispatch(decrementItemAction({id})),
    incrementSizeAction: ({id}) => dispatch(incrementSizeAction({id})),
    decrementSizeAction: ({id}) => dispatch(decrementSizeAction({id}))
    });

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
