import React from 'react';
import AdminList from './AdminList';
import AdminListFilters from './AdminListFilters';
import AdminSummary from './AdminSummary';

const AdminDashboardPage = () => (
    <div>        
        <AdminSummary />
        <AdminListFilters />
        <AdminList />        
    </div>
);

export default AdminDashboardPage;