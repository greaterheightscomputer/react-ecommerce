import React from 'react';
import { connect } from 'react-redux';
import AdminListItem from './AdminListItem';
import selectEcommerce from '../selectors/ecommerces';

export const AdminList = (props) => (
    
    <div className="content-container">
        <div className="list-header">
            <div>Admin Products List</div>
        </div>             
        <div className="list-body">
            <div className="list-items" >
                {
                    props.ecommerces.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Products</span>
                        </div>
                    ) : (
                        props.ecommerces.map((ecommerce) =>{
                            return <AdminListItem key={ecommerce.id} {...ecommerce} />
                        })
                    )
                }                        
            </div>        
        </div>           
    </div>
);

const mapStateToProps = (state) => {
    return {
        ecommerces: selectEcommerce(state.ecommerces, state.filters)        
    };
}

export default connect(mapStateToProps)(AdminList);