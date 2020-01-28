import uuid from 'uuid';
import database from '../firebase/firebase';
//Add_Ecommerce
export const addEcommerce = (ecommerce) => ({
    type: 'ADD_ECOMMERCE',
    ecommerce
});

// export const addEcommerce = ({
//     description='', category='', item='', amount=0, image= null, imageUrl=null, stock=0, createdAt=0
// }) => ({
//     type: 'ADD_ECOMMERCE',
//     ecommerce: {
//         id: uuid(), description, category, item, amount, image, imageUrl, stock, createdAt
//     }
// });

export const startAddEcommerce = (ecommerceData = {}) => {
    return (dispatch) => {
        const {
            description='', 
            category='', 
            item='', 
            amount=0, 
            image= '', 
            imageUrl='', 
            stock=0, 
            company='',
            info='',
            inCart=false,
            count=0,
            total=0,
            createdAt=0
        } = ecommerceData;
        const ecommerce={description, category, item, amount, image, imageUrl, stock, company, info, inCart, count, total, createdAt }
                 
            return database.ref('ecommerces').push(ecommerce).then((ref) => {
                dispatch(addEcommerce({
                    id: ref.key,                                                           
                    ecommerce: {
                        inCart,
                        count,
                        total
                    },
                    ...ecommerce

                })); 
            });            
    };
};

// REMOVE_Ecommerce    
export const removeEcommerce = ( { id } = {}) => ({
    type: 'REMOVE_ECOMMERCE',
    id
});

export const startRemoveEcommerce = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`ecommerces/${id}`).remove().then(() => {
            dispatch(removeEcommerce({ id }));
        });
    };
};
// EDIT_Ecommerce  
export const editEcommerce = (id, updates) => ({
    type: 'EDIT_ECOMMERCE',
    id,
    updates
});
export const startEditEcommerce = (id, updates) => {
    return (dispatch) => {
        return database.ref(`ecommerces/${id}`).update(updates).then(() => {
            dispatch(editEcommerce(id, updates));
        });
    };
};

//SET_Ecommerce
export const setEcommerce = (ecommerces) => ({ 
    type: 'SET_ECOMMERCE',
    ecommerces
});

export const startSetEcommerce = () => {
    return (dispatch) => {
        return database.ref('ecommerces').once('value').then((snapshot) => {
            const ecommerces = [];

            snapshot.forEach((childSnapshot) => {
                ecommerces.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });            
            dispatch(setEcommerce(ecommerces));            
        });
    };
};
