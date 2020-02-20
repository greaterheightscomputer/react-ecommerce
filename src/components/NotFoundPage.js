import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5 text--fontP">                    
                    <h1 className="display-3">404!</h1>
                    <h1 className="display-3">Page Not Found</h1>  
                    <h2>The requested URL 
                        <span className="text-danger">{props.location.pathname}</span> was not found
                    </h2>      
                <Link to="/" className="button button__custheader button--cart">Go To Home</Link>
                </div>
            </div>
    </div>
    )    
};

export default NotFoundPage;