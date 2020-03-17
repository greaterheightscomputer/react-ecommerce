const cartDBReducerDefaultState = [];

const cartDBReducer = (state = cartDBReducerDefaultState, action) => {
    switch (action.type) {        
        case 'SUCCESSFUL_ADD_CART_TO_DB': {            
            console.log('add cart to db sucessfully');  
            return null;                
        }  
        case 'FETCH_CART_FROM_DB':{
            return action.cart;       
         }
        // case 'REMOVE_CART': { 
        //     const product = action.cart;            
        //     // console.log("Remove Cart Id: ", product);                                    
        //     const cart = state.filter((item) =>  !item === product);                                           
        //     // console.log(cart);   
        //     return cart;               
        // }
        // case 'REMOVE_ITEM': {                         
        //     // console.log('Remove_item_Product', product); 
        //     // console.log('Remove_item_state', state); 

        //     return state.filter(({ id }) => id !== action.payload.id); 
            
        //     // return state
        //     // .map(item => (item.id === action.payload.id ? { ...item, count: item.count - 1 } : item))
        //     // .filter(item => item.count > 0);            
        // }
        
        default: return state;                                                 
    }    
};

export default cartDBReducer;