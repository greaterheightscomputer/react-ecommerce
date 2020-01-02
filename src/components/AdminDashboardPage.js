import React from 'react';
import AdminList from './AdminList';
import AdminListFilters from './AdminListFilters';

const AdminDashboardPage = () => (
    <div>        
        <AdminListFilters />
        <AdminList />        
    </div>
);

export default AdminDashboardPage;