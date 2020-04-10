import React from 'react';
import ProductProvider  from './context';
import CustList from '../../components/clientcomponent/CustList';
import CustListFilters from '../../components/clientcomponent/CustListFilters';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustProductModal from '../../components/clientcomponent/CustProductModal';

const CustDashboardPage = () => (    
    <ProductProvider>           
        <CustListFilters/>
        <CustList />      
        <CustProductModal/>             
    </ProductProvider>    
);

export default CustDashboardPage;

