import React from 'react';
import { connect } from 'react-redux';

const EcommerceList = (props) => (
    <div>
        <h1>Ecommerce List</h1>
        {props.ecommerces.length}
        {props.filters.text}
    </div>
);

const mapStateToProps = (state) => {
    return {
        ecommerces: state.ecommerces,
        filters: state.filters
    };
}

export default connect(mapStateToProps)(EcommerceList);