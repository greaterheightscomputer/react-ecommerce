import React from 'react';
import AdminList from './AdminList';
import AdminListFilters from './AdminListFilters';
import EcommerceSummary from './EcommerceSummary';

const AdminDashboardPage = () => (
    <div>        
        <EcommerceSummary />
        <AdminListFilters />
        <AdminList />        
    </div>
);

export default AdminDashboardPage;