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
            createdAt=0
        } = ecommerceData;
        const ecommerce={description, category, item, amount, image, imageUrl, stock, createdAt }
        
            return database.ref('ecommerces').push(ecommerce).then((ref) => {
                dispatch(addEcommerce({
                    id: ref.key,                    
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
// EDIT_Ecommerce  
export const editEcommerce = (id, updates) => ({
    type: 'EDIT_ECOMMERCE',
    id,
    updates
});
