import React from 'react';
import moment from 'moment';

export default class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        firstName:'',
        lastName:'',
        phone: 0,
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
        if(!this.state.email || !this.state.password || !this.state.firstName || !this.state.lastName || !this.state.phone) {
            this.setState(() => ({
                error: 'Please provide value for empty field(s)'
            }));
        } else {
            this.setState(() => ({ 
                error: '',
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phone                                
             }));
            console.log(this.state)
        }
    }; 
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitClick} >
                    <h1> Sign Up</h1>
                    <div>
                        <label>Email</label>
                        <input 
                            type="email"                             
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
                        <label>First Name</label>
                        <input 
                            type="text"                             
                            value={this.state.firstName}
                            onChange={this.onFirstNameChange} 
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input 
                            type="text"                             
                            value={this.state.lastName}
                            onChange={this.onLastNameChange} 
                        />
                    </div>
                    <div>
                        <label>Phone N0</label>
                        <input 
                            type="text"                            
                            value={this.state.phone}
                            onChange={this.onPhoneChange} 
                        />
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    };
};