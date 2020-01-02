import React from 'react';
import CustList from './CustList';
import CustListFilters from './CustListFilters';

const CustDashboardPage = () => (    
    <div>       
        <CustListFilters/>
        <CustList />
    </div>
);

export default CustDashboardPage;