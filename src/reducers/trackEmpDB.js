const trackEmpDBReducerDefaultState = [];

const trackEmpDBReducer = (state = trackEmpDBReducerDefaultState, action) => {
    switch (action.type) {                
        case 'FETCH_TRACKEMP_FROM_DB':{
            return action.trackEmp;       
         }                
        default: return state;                                                 
    }    
};

export default trackEmpDBReducer;