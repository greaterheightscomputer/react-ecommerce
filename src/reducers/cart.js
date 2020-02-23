const cartReducerDefaultState = [
    // {
    //     id:'-LynLz9jYS05Qm5pktMQ',
    //     description: 'Japan Shoe', 
    //     category: 'Men', 
    //     item: 'Men Footwear', 
    //     amount: 4150000, 
    //     image: 'shoe.png', 
    //     imageUrl: '../images/men_shoe1.jpg', 
    //     stock: 10, 
    //     company: 'Japan Company Ltd.',
    //     info:'The product is made for men who love and desirer of good quantity foot wear product. Our product has been in exist for 50 years now with the same high quantity materials and products. We have our customers global continuely demanding for our high product. The shipment of our product to any part of the world behind 24 hours of purchaseThe product is made for men who love and desirer of good quantity foot wear product. Our product has been in exist for 50 years now with the same high quantity materials and products. We have our customers global continuely demanding for our high product. The shipment of our product to any part of the world behind 24 hours of purchase',
    //     inCart: false,
    //     count: 0,
    //     total: 0,
    //     size: 0,
    //     createdAt:1000
    // }
 ];

const cartReducer = (state = cartReducerDefaultState, action) => {
    switch (action.type) {        
        case 'ADD_TO_CART': {
            const product = action.payload; 
            console.log(product);                              
            const cart = state;            

            const existingProductIndex = findProductIndex(cart, product.id);       
            const cartProduct = existingProductIndex >= 0 
                ? updateProductUnits(cart, product) //override the existing product
                : [...cart, product];  //else add new product
                return cartProduct;
        }  
        case 'REMOVE_CART': { 
            const product = action.cart;            
            // console.log("Remove Cart Id: ", product);                        
            // const cart = state.filter(({id}) =>  id !== productId);  
            const cart = state.filter((item) =>  !item === product);                                           
            // console.log(cart);   
            return cart;               
        }
        case 'REMOVE_ITEM': {                         
            // console.log('Remove_item_Product', product); 
            // console.log('Remove_item_state', state); 

            return state.filter(({ id }) => id !== action.payload.id); 
            
            // return state
            // .map(item => (item.id === action.payload.id ? { ...item, count: item.count - 1 } : item))
            // .filter(item => item.count > 0);            
        }
        case 'INCREMENT_SIZE': {                       
            return state
            .map(item => (item.id === action.payload.id ? { ...item , size: (item.size + 1)} : item))
            //.filter(item => item.count > 0);    
        }
        case 'DECREMENT_SIZE': {   
            return state
            .map(item => (item.id === action.payload.id ? { ...item , size: (item.size - 1)} : item));
        }
        case 'INCREMENT_ITEM': {
            const productAction = action.payload; 
            // console.log(productAction);        
            // console.log("productAction: ", productAction.id);                       
            const cart = state;    
            
            const existingProductIndex = findProductIndex(cart, productAction.id);       
            const cartProduct = (existingProductIndex >= 0) &&
             incrementProduct(cart, productAction) //override the existing product            
            return cartProduct;
            
            // return state
            // .map(item => (item.id === action.payload.id ? { ...item , count: (item.count + 1), total: (item.amount * item.count) } : item))
            // .filter(item => item.count > 0);    
        }
        case 'DECREMENT_ITEM': {   
            const productAction = action.payload;             
            const cart = state;                                      
            
            // return state
            // .map(item => (item.id === action.payload.id ? { ...item, count: item.count - 1, total: (item.total) } : item))
            // .filter(item => item.count > 0);            
            
            const existingProductIndex = findProductIndex(cart, productAction.id);       
            const cartProduct = (existingProductIndex >= 0) &&
             decrementProduct(cart, productAction) //override the existing product            
            return cartProduct;
        }
        default: return state;                                                 
    }    
};

const findProductIndex=(cart, productId)=> {
    return cart.findIndex(p => p.id === productId);    
};
const updateProductUnits=(cart, product)=>{
    const productIndex = findProductIndex(cart, product.id);    //find the index
    // console.log('UpdateProduct: ',productIndex)
    const cartProduct = [...cart];  //copy all the cart product
    const existingProduct = cartProduct[productIndex]; //return the product with a specific index
    const updatedProduct = {...existingProduct}; //copy exist product 
    cartProduct[productIndex] = updatedProduct; //override the existing product with the updated product
    return cartProduct;        
};
const incrementProduct=(cart, product)=>{
    const productIndex = findProductIndex(cart, product.id);    
    const updatedCarts = [...cart];    
    const existingProduct = updatedCarts[productIndex];
    existingProduct.count = existingProduct.count + 1;
    existingProduct.total = existingProduct.amount * existingProduct.count;
    const updatedUnitsProduct = {...existingProduct};
    updatedCarts[productIndex] = updatedUnitsProduct;        
    return updatedCarts;        
};
const decrementProduct=(cart, product)=>{
    const productIndex = findProductIndex(cart, product.id);     
    const updatedCarts = [...cart];
    const existingProduct = updatedCarts[productIndex];   
    existingProduct.count = existingProduct.count - 1;
    if(existingProduct.count === 0){
        return cart.filter(({ id }) => id !== product.id); 
    }else {
        existingProduct.total = existingProduct.amount * existingProduct.count; 
        const updatedUnitsProduct = {...existingProduct};  //copying existingProduct 
        updatedCarts[productIndex] = updatedUnitsProduct;        
        return updatedCarts;        
    }
};
// const updateProductUnits=(cart, product)=>{
//     const productIndex = findProductIndex(cart, product.id);    
//     const updatedCarts = [...cart];
//     const existingProduct = updatedCarts[productIndex];
//     const updatedUnitsProduct = {
//         ...existingProduct, 
//         count: existingProduct.count + product.count
//     };
//     updatedCarts[productIndex] = updatedUnitsProduct;
//     return updatedCarts;        
// };

export default cartReducer;

