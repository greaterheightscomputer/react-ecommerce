import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetEcommerce } from './actions/ecommerces';
import { loginSucess, loginFail, logout } from './actions/auth';
import getVisibleExpenses from './selectors/ecommerces';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
    );

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log('log in');
//         console.log(user);
//     } else {
//         console.log('log out');
//         console.log(user);
//     }
// });

store.dispatch(startSetEcommerce()).then(() => {    //this will render for customers to view products
    ReactDOM.render(jsx, document.getElementById('app'));
});

let hasRendered = false;    //employee authentication
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {        
        store.dispatch(loginSucess(user.uid));
        store.dispatch(startSetEcommerce()).then(() => {
            renderApp();
            if(history.location.pathname === '/signin') {
                history.push('/admin_dashboard');
            }
        });
    }else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
});

