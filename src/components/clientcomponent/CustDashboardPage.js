import React from 'react';
import ProductProvider  from './context';
import CustList from '../../components/clientcomponent/CustList';
import CustListFilters from '../../components/clientcomponent/CustListFilters';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustProductModal from './CustProductModal';
import CustCart from '../cart/CustCart';

const CustDashboardPage = () => (    
    <ProductProvider>                
        <CustListFilters/>        
        <CustList />      
        <CustProductModal/> 
        {/*<CustCart/>*/}
    </ProductProvider>    
);

export default CustDashboardPage;

