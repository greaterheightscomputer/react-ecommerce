import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ecommerces, detailProduct } from '../clientcomponent/data';
import { addToCartAction } from '../../actions/cart';

const ProductContext = React.createContext();

export class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [], //ecommerces         
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
      
    componentDidMount() {
        this.setProducts();                                    
    };
    // setProducts = () => {        
    //     let tempProducts = [];                  
    //     // ecommerces.forEach((item) => {
    //     // this.props.ecommerces.forEach((item) => {                               
    //     //     const singleItem= {...item };            
    //     //     tempProducts = [...tempProducts, singleItem];                       
    //     // });     
    //     // tempProducts = this.props.ecommerces;                         
    //     tempProducts = ecommerces;                         
    //     this.setState(() => {
    //         return { products: tempProducts };
    //     });
    // };
    setProducts = () => {        
        let tempProducts = [];   
        tempProducts = this.props.ecommerces;                       
        // tempProducts = ecommerces;                         
        this.setState(() => {
            return { products: tempProducts };
        });
    };
    getItem = (id) => {
        const product = this.props.ecommerces.find((item) => item.id === id); //utility method
        // const product = ecommerces.find((item) => item.id === id); //utility method
        return product;        
    };          
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })        
    };    
    // addToCart = (id) => {
    //     // let tempProducts = [...this.props.ecommerces];
    //     let tempProducts = [...ecommerces];
    //     const index = tempProducts.indexOf(this.getItem(id));
    //     const product = tempProducts[index];        
    //     product.inCart = true;
    //     product.count = 1;
    //     const price = product.amount;
    //     product.total = price;
               
    //     this.setState(() => {
    //         return {
    //             products: tempProducts,                
    //             cart: [...this.state.cart, product]
    //         };
    //     }, 
    //     () => {                                     
    //         console.log(this.state);        
    //     });
    //     // console.log(`this is add to card ${id}`);
    // };    
    addToCart = (product, e) => {
        // const size = e.target.value;
        // console.log(size);
        let tempProducts = [...this.props.ecommerces];
        // let tempProducts = [...ecommerces]  
        const productIndex = tempProducts.findIndex(p => p.id === product.id);        
        product = tempProducts[productIndex];        
        // product.inCart=true;  
        product.count=1;        
        product.total=product.amount;  
        product.size = product.size;
        console.log(product);

        this.props.addToCartAction(product);        
    };
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { 
                modalProduct: product,                
                modalOpen: true
             }
        })
    };
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    };
    // addTotals = () => {
    //     let subTotal = 0;
    //     this.state.cart.map((item) => (subTotal += item.total));
    //     const tempTax = subTotal * 0.075; //7.5%
    //     const tax = parseFloat(tempTax.toFixed(2));
    //     const total = subTotal + tax;
    //     this.setState(() => {
    //         return {
    //             cartSubTotal: subTotal,
    //             cartTax: tax,
    //             cartTotal: total
    //             }
    //     })
    // };
    increment = (id) => {
        console.log('this is increment function');
        // let tempCart = [...this.state.cart];
        // const selectedProduct = tempCart.find(item => item.id === id);
        // const index = tempCart.indexOf(selectedProduct);
        // const product = tempCart[index];
        // product.count = product.count + 1;
        // product.total = product.count * product.amount;

        // this.setState(() => {
        //     return {cart: [...tempCart]};
        // },
        // () => {
        //     this.addTotals();
        // });        
    };
    decrement = (id) => {
        console.log('this is decrement function');
        // let tempCart = [...this.state.cart];
        // const selectedProduct = tempCart.find(item => item.id === id);
        // const index = tempCart.indexOf(selectedProduct);
        // const product = tempCart[index];
        // product.count = product.count - 1;

        // if(product.count === 0){
        //     this.removeItem(id);
        // }else {
        //     product.total = product.count * product.amount;
        //     this.setState(() => {
        //         return {cart: [...tempCart]};
        //     },
        //     () => {
        //         this.addTotals();
        //     }
        //     );
        // }
    };
    removeItem = (id) => {
        console.log('item removed function');        
    };
    clearCart = (id) => {
       console.log('clear the cart');       
    };
    render() {                
        return (
            <ProductContext.Provider value={{
                ...this.state,                   
                cart: this.state.cart,                
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}                
            </ProductContext.Provider>            
        )        
    }
}

export const ProductConsumer = ProductContext.Consumer;

const mapStateToProps = (state) => {     
    return {                        
        ecommerces: state.ecommerces        
    };    
}
const mapDispatchToProps = (dispatch) => ({    
    addToCartAction: (product) => dispatch(addToCartAction(product))    
    });

export default connect(mapStateToProps, mapDispatchToProps)(ProductProvider);


