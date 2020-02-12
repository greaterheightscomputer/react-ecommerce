import { ecommerces } from '../components/clientcomponent/data';

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
    //     createdAt:1000
    // }
];
const cartReducer = (state = cartReducerDefaultState, action) => {
    switch (action.type) {        
        case 'ADD_TO_CART': {
            const product = action.payload;                               
            const cart = state;            

            const productIndex = findProductIndex(cart, product.id);       
            const productCart = product;        
            console.log(productCart);                   
            const updatedCarts = (productIndex !== 0) && [...cart, productCart];                                   
             return updatedCarts;

            // const existingProductIndex = findProductIndex(cart, product.id);       
            // const updatedCarts = existingProductIndex > 0 
            //     ? updateProductUnits(cart, product)
            //     : [...cart, product];  
                                 
            //     return updatedCarts;
                // return product;
                
        }     
        default: return state;                                                 
    }    
};

const findProductIndex=(cart, productId)=> {
    return cart.findIndex(p => p.id === productId);
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

