export const addToCartAction = ({
    id='',
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
    
}) => ({
    type: 'ADD_TO_CART',
    payload: {
        id,
        description, 
            category, 
            item, 
            amount, 
            image, 
            imageUrl, 
            stock, 
            company,
            info,
            inCart,
            count,
            total,
            createdAt
    }
});

// REMOVE_Cart    
export const removeCartAction = (cart = {}) => ({
    type: 'REMOVE_CART',
    cart
});
// REMOVE_Item    
export const removeItemAction = (payload = {}) => ({
    type: 'REMOVE_ITEM',
    payload
});
// Increment_Item    
export const incrementItemAction = (payload = {}) => ({
    type: 'INCREMENT_ITEM',
    payload
});
// Increment_Item    
export const decrementItemAction = (payload = {}) => ({
    type: 'DECREMENT_ITEM',
    payload
});