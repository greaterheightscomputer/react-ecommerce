import React from 'react';
import CustList from '../../components/clientcomponent/CustList';
import CustListFilters from '../../components/clientcomponent/CustListFilters';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustDashboardPage = () => (    
    <div>                
        <CustListFilters/>        
        <CustList />                       
    </div>    
);

export default CustDashboardPage;