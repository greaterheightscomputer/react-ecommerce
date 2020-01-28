import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class SignIn extends React.Component {
    state = {
        email: '',
        password: ''        
    };    
    onEmailChange = (e) => {      
        const email = e.target.value  
        this.setState({ email });
    };
    onPasswordChange = (e) => {      
        const password = e.target.value  
        this.setState({ password });
    };
    onSubmitClick = (e) => {
        e.preventDefault();                  
        //console.log(this.state);
        this.props.startLogin(this.state);          
    };
    render() {
        const { authError } = this.props;
        return (
            <div className="box-layout">                
                <div className="box-layout__box">
                    <form onSubmit={this.onSubmitClick} >
                        <h1 className="box-layout__title"> Sign In</h1>
                        <div>
        {/*<label>Email</label>*/}
                            <input 
                                className="text-input text-input__extend"
                                type="email"                             
                                autoFocus
                                value={this.state.email} 
                                onChange={this.onEmailChange}
                                placeholder="Enter Email"
                            />
                        </div>
                        <div>
        {/*<label>Password</label>*/}
                            <input
                                className="text-input text-input__extend"
                                type="password"                             
                                value={this.state.password} 
                                onChange={this.onPasswordChange} 
                                placeholder="Enter Password"
                            />
                        </div>
                        <div>
                            <button className="button button__space">Login with Credential</button>
                            <div className="box-layout__error">
                                { authError ? <p>{authError}</p> : null }
                            </div>
                        </div>
                    </form>
                </div>                
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    authError: state.auth.authError
});

const mapDispatchToProps = (dispatch) => ({
    startLogin: (creds) => dispatch(startLogin(creds))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);