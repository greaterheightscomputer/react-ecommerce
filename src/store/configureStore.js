import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ecommercesReducer from '../reducers/ecommerces';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import cartReducer from '../reducers/cart';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store Creation
export default () => {
    const store = createStore(    
        combineReducers({
            ecommerces: ecommercesReducer,            
            filters: filterReducer,
            auth: authReducer,
            cart: cartReducer            
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()         
    );        

    return store;
};
