export default (ecommerces) => {
    return ecommerces.map((ecommerce) => ecommerce.amount).reduce((sum, value) => sum + value, 0);

};