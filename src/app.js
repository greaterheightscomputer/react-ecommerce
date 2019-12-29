import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addEcommerce } from './actions/ecommerces';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/ecommerces';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addEcommerce({ description: 'men jewellery'}));
store.dispatch(addEcommerce({ description: 'men underwear'}));
store.dispatch(setTextFilter('under'));
// console.log(store.getState());
const state = store.getState();
const visibleEcommerce = getVisibleExpenses(state.ecommerces, state.filters);
console.log(visibleEcommerce);

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
    );

ReactDOM.render(jsx, document.getElementById('app'));