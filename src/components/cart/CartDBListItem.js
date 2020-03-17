import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectCartDB from '../../selectors/cart-db';
import numeral from 'numeral';

const CartDBListItem = (props) => {        
    const dbId = props.match.params.id;
    // console.log(dbId);    
    const cartItem = props.cartdbs
        .map( (cartdb) => (cartdb.id === dbId ? {...cartdb} : cartdb))        
        .filter(cartdb => cartdb.id === dbId);
    // console.log(cartItem);    
    return(         
        <div >            
         {/* <img  src={images} height="200" width="150" />              
             <h3 className="list-item__title"> {id} <br/> </h3>
            <h3 className="list-item__title"> {description} <br/> </h3>
            <h3 className="list-item__title"> {'₦'+numeral(amount / 100).format('0,0.00')}</h3>
    */}

    {           
        cartItem.map((item) =>                
            //  console.log({...item}) //  console.log({...item[index]})                                            
            (item.id === dbId ?  {...item[0]}  : item)            
            )
            .map((i) => {
        //  console.log('i', i)                 
                return <div key={i.id}>
                    <img  src={i.imageUrl} height="200" width="150" />                
                    <h3 className="list-item__title"> {i.description} <br/> </h3>
                    <h3 className="list-item__title"> {i.id} <br/> </h3>
                    <h3 className="list-item__title"> {'₦'+numeral(i.amount / 100).format('0,0.00')}</h3>
            </div>
           })
         

        // props.cartdbs.length === 0 ? (
        //     <div className="list-item list-item--message">
        //         <span>No Cart Products</span>
        //     </div>
        // ) : 
        // (
        //     props.cartdbs.map((cartdb) =>{                                                        
        //             return <CartDBListItem key={cartdb.id} cartdb={cartdb}  />                            
        //     })                       
        // )                                       
    } 
        </div>      
)};

const mapStateToProps = (state) => {
    return {
        cartdbs: selectCartDB(state.cartDB, state.filters)        
    };
}

export default connect(mapStateToProps)(CartDBListItem);
// export default CartDBListItem;