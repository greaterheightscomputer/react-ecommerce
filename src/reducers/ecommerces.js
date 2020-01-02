const ecommerceReducerDefaultState = [];
const ecommerceReducer = (state = ecommerceReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ECOMMERCE':            
            return [...state, action.ecommerce];   
        case 'REMOVE_ECOMMERCE':            
            return state.filter(({ id }) => id !== action.id); 
        case 'EDIT_ECOMMERCE':
            return state.map((ecommerce) => {
                if (ecommerce.id === action.id){
                    return {...ecommerce, ...action.updates};
                }else {
                    return ecommerce;
                }
            });              
        default: return state;        
    }
};

export default ecommerceReducer;