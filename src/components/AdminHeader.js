import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, addTrackEmployee } from '../actions/auth';

export class AdminHeader extends React.Component{
    onSubmit = () => {        
        const { auth } = this.props;
        // console.log(auth);
        const email="";        
        const operation= `Logout Successfully`;        

        this.props.startLogout();
        this.props.addTrackEmployee(auth, email, operation);     //once your logout its save your details in the database            
    };
    render(){
        return(
            <header className="admin-header">        
                <div className="content-container">
                    <div className="admin-header__container">
                        <Link className="admin-header__title " to="/admin_dashboard">
                            <h1>E-Market</h1>
                        </Link>
                        <button className="button button--link" onClick={this.onSubmit}>Logout</button>          
                    </div>            
                </div>        
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {        
        auth: state.auth.uid      
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
    addTrackEmployee: (userId, email, operation) => dispatch(addTrackEmployee(userId, email, operation))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);