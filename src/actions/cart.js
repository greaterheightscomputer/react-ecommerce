
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