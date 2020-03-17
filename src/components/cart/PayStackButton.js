import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaystackButton from 'react-paystack';
import { removeCartAction } from '../../actions/cart';
import { addCartDB } from '../../actions/cartDB';

    class App extends Component {

    	state = {
    		key: process.env.REACT_APP_PUBLIC_KEY, //PAYSTACK PUBLIC KEY
    		email: "greaterheightscomputer@gmail.com",  // customer email
    		// amount: this.props.total //equals NGN100,
    	}

    	callback = (response) => {
        console.log(response); // card charged successfully, get reference here
        this.props.addCartDB(this.props.cart);  //add cart to firebaseDB
        this.props.removeCartAction(this.props.cart); //clear the cart
        this.props.history.push('/');    //go back to home page
    	}

    	close = () => {
    		console.log("Payment closed");
    	}

    	getReference = () => {
    		//you can put any unique reference implementation code here
    		let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    		for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));

    		return text;
    	}

      render() {        
        return (
          <div>
            <p>
              <PaystackButton 
                text="Make Payment"
                className="payButton button"
                callback={this.callback}
                close={this.close}
                // disabled={true} {/*disable payment button*/}
                // embed={true} {/*payment embed in your app instead of a pop up*/}
                reference={this.getReference()}
                email={this.state.email}
                amount={this.props.total}
                paystackkey={this.state.key}
                // tag="button"{/*it can be button or a or input tag */}
              />
            </p>
          </div>
        );
      }
    }

    const mapStateToProps = (state) => { 
      return {                             
          cart: state.cart //.find((cart) => cart === cart)       
      };    
  }
  const mapDispatchToProps = (dispatch) => ({    
      removeCartAction: (cart) => dispatch(removeCartAction(cart)),    
      addCartDB: (cart) => dispatch(addCartDB(cart))    
      });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
    