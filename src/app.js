import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addEcommerce } from './actions/ecommerces';
import { setTextFilter, sortByDate, sortByAmount, categoryTypeMen, categoryTypeWomen } from './actions/filters';
import getVisibleExpenses from './selectors/ecommerces';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addEcommerce({ description: 'men covered shoe', amount:12300, stock: 50, category: 'amen', item:'men_footwear', image: 'men_shoe1', imageUrl:'', createdAt: 1000 }));
// store.dispatch(addEcommerce({ description: 'men underwear', amount:400, stock: 240, category: 'amen', item:'men_underwear' }));
// store.dispatch(addEcommerce({ description: 'men clothe', amount:2100, stock: 1240, category: 'amen', item:'men_clothe', createdAt: 3000 }));
// store.dispatch(addEcommerce({ description: 'boy clothe', amount:2200, stock: 2040, category: 'boy', createdAt: -2000 }));
// store.dispatch(addEcommerce({ description: 'boy shirt', amount:2300, stock: 2940, category: 'boy', createdAt: 12000 }));
// store.dispatch(addEcommerce({ description: 'women clothe', amount:1400, stock: 22340, category: 'women', createdAt: 24000 }));
// store.dispatch(addEcommerce({ description: 'girl headwear', amount:23400, stock: 1340, category: 'girl', createdAt: 5000 }));
// store.dispatch(addEcommerce({ description: 'girl underwear', amount:2400, stock: 2340, category: 'girl', createdAt: 22000 }));
// store.dispatch(addEcommerce({ description: 'girl top', amount:5000, stock: 2340, category: 'girl', createdAt: -2000 }));
// store.dispatch(setTextFilter('under'));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(categoryTypeWomen());
// store.dispatch(categoryTypeMen());
console.log(store.getState());
const state = store.getState();
const visibleEcommerce = getVisibleExpenses(state.ecommerces, state.filters);
console.log(visibleEcommerce);

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
    );

ReactDOM.render(jsx, document.getElementById('app'));