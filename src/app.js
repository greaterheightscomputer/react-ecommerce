import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ProductProvider from './components/clientcomponent/context';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetEcommerce } from './actions/ecommerces'; 
import { fetchCardDB } from './actions/cartDB'; 
import { loginSucess, logout, addTrackEmployee } from './actions/auth';
import getVisibleExpenses from './selectors/ecommerces';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (    
    <Provider store={store}>
    <ProductProvider>
        <AppRouter />            
    </ProductProvider>    
    </Provider>    
    );

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log('log in');
//         console.log(user);
//     } else {
//         console.log('log out');
//         console.log(user);
//     }
// });

store.dispatch(startSetEcommerce()).then(() => {    //this will render the product to customers to view products
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
        const userId = user.uid;
        const email = user.email;
        const operation = "Login Successfully";
        // console.log(user)                      
        store.dispatch(loginSucess(user.uid)); 
        store.dispatch(startSetEcommerce()).then(() => { //fetch data from firebase and set or drop it on the redux store                                       
            renderApp();    
            if(history.location.pathname === '/signin') {     
                history.push('/admin_dashboard');                 
                if(user.uid === userId && user.email === email && operation === "Login Successfully"){                    
                    store.dispatch(addTrackEmployee(userId, email, operation));
                }
            }                                               
        });          
        store.dispatch(fetchCardDB());  //fetch carts data from firebase and set to CardDB in the redux store         
    } 
    else {        
        store.dispatch(logout());
        renderApp();
        history.push('/') 
    }
});

