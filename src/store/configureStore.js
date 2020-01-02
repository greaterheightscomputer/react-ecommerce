import { createStore, combineReducers } from 'redux';
import ecommercesReducer from '../reducers/ecommerces';
import filterReducer from '../reducers/filters';

//Store Creation
export default () => {
    const store = createStore(    
        combineReducers({
            ecommerces: ecommercesReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()         
    );        

    return store;
};
