import React from 'react';
import moment from 'moment';
import { signUp } from '../actions/auth';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom';

export class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        firstName:'',
        lastName:'',
        phone: '',
        createdAt: moment().toDate().valueOf()
    };
    onEmailChange = (e) => {      
        const email = e.target.value; 
        this.setState({ email });
    };
    onPasswordChange = (e) => {      
        const password = e.target.value;  
        this.setState({ password });
    };
    onFirstNameChange = (e) => {      
        const firstName = e.target.value;  
        this.setState({ firstName });
    };
    onLastNameChange = (e) => {      
        const lastName = e.target.value; 
        this.setState({ lastName });
    };
    onPhoneChange = (e) => {      
        const phone = e.target.value;  
        if (!phone || phone.match(/^\d{0,11}?$/)){
            this.setState({ phone });
        }                        
    };       
    onSubmitClick = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);  
        this.setState({
            email: '',
            password: '',
            firstName:'',
            lastName:'',
            phone: '',
        });
    }; 
    render() {
        const { authError, auth } = this.props;                  
        // if(!auth) return <Redirect to="/signin"/> //on successful signup return to signin page
        if(auth===null) return <Redirect to="/signin"/>  //on successful signup return to signin page
        return (            
            <form  onSubmit={this.onSubmitClick} >
                {this.state.error && <p>{this.state.error}</p>}
                <div className="page-admin-header">
                    <div className="content-container">
                        <h1>Sign Up</h1>    
                    </div>
                </div>
                <div className="content-container">                                          
                    <div className="form__signup">
                    <input 
                        className="text-input"
                        placeholder="Email"
                        type="email"                             
                        value={this.state.email}
                        onChange={this.onEmailChange} 
                    />
                    <input 
                        className="text-input"
                        placeholder="Password"
                        type="password"                            
                        value={this.state.password}
                        onChange={this.onPasswordChange} 
                    />
                    <input 
                        className="text-input"
                        placeholder="First Name"
                        type="text"                             
                        value={this.state.firstName}
                        onChange={this.onFirstNameChange} 
                    />
                    <input 
                        className="text-input"
                        placeholder="Last Name"
                        type="text"                             
                        value={this.state.lastName}
                        onChange={this.onLastNameChange} 
                    />
                    <input 
                        className="text-input"
                        placeholder="Phone Number"
                        type="text"                            
                        value={this.state.phone}
                        onChange={this.onPhoneChange} 
                    />     
                    <div>
                        { authError ? <p className="form__error">{ authError }</p> : null }                                
                        <button className="button button__space">Sign Up</button>                                                                             
                    </div>                    
                    </div>
                </div>
            </form>            
        );
    };
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,  
        auth: state.auth.uid      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);