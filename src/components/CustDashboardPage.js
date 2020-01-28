import React from 'react';
import CustList from './CustList';
import CustListFilters from './CustListFilters';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustDashboardPage = () => (    
    <div>                
        <CustListFilters/>        
        <CustList />                       
    </div>    
);

export default CustDashboardPage;