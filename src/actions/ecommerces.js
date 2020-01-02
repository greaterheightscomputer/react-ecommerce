import uuid from 'uuid';

//Add_Ecommerce
export const addEcommerce = ({ description='', category='', item='', amount=0, image='', imageUrl='', stock=0, createdAt=0 } = {}) => ({
    type: 'ADD_ECOMMERCE',
    ecommerce: {
        id: uuid(),        
        description,
        category,
        item,
        amount,
        image,
        imageUrl,
        stock,
        createdAt
    }
});
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
