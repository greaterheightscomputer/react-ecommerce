import database from '../firebase/firebase';

//asynchronous redux store Cart
export const addCartDB = (cart) => {              
    return (dispatch) => {    
        return database.ref('carts').push(cart).then(() => {
                dispatch({ type: 'SUCCESSFUL_ADD_CART_TO_DB'});
            });                          
        };
};
export const fetchCard = (cart) => ({ 
    type: 'FETCH_CART_FROM_DB',
    cart
});
export const fetchCardDB = () => {
    return (dispatch) => {
        return database.ref('carts').once('value').then((snapshot) => {
            const carts = [];

            snapshot.forEach((childSnapshot) => {
                carts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });                
                // console.log('cartDB: ', carts);   
                // console.log('cartDB_1: ', carts[0].id);   
                // console.log('cartDB_ID: ', carts[0][0].id);                               
            });            
            dispatch(fetchCard(carts));            
        });
    };
};
