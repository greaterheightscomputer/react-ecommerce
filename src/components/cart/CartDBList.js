import React from 'react';
import { connect } from 'react-redux';
import CartDBListId from './CartDBListId';
import CartDBListItem from './CartDBListItem';
import selectCartDB from '../../selectors/cart-db';

export const CartDBList = (props) => {
    // console.log(props);
    return(    
    <div>
        <div className="list-header">
            <div>List of Sold Products </div>
        </div><br/><br/>             
        <div className="list-body">
            <div className="list-items" >
                {
                    props.cartdbs.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Cart Products</span>
                        </div>
                    ) : (
                        props.cartdbs.map((cartdb) =>{                                                                                   
                                return <CartDBListId key={cartdb.id} cartdb={cartdb}/>                            
                        })                    
                    )           
                }           
            </div>        
        </div>           
    </div>
)};

const mapStateToProps = (state) => {
    return {
        cartdbs: selectCartDB(state.cartDB, state.filters)        
    };
}

export default connect(mapStateToProps)(CartDBList);