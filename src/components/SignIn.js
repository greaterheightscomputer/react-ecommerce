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
            <div>                
                <form onSubmit={this.onSubmitClick} >
                    <h1> Sign In</h1>
                    <div>
                        <label>Email</label>
                        <input 
                            type="email"                             
                            autoFocus
                            value={this.state.email} 
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type="password"                             
                            value={this.state.password} 
                            onChange={this.onPasswordChange} 
                        />
                    </div>
                    <div>
                        <button>Login</button>
                        <div>
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
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