import React from 'react';
import { shallow } from 'enzyme';
import { AdminSummary } from '../../components/AdminSummary';

test('should render AdminSummary with 1 product', () => {
    const wrapper = shallow(<AdminSummary ecommerceCount={1} ecommerceTotal={3450} />);
    expect(wrapper).toMatchSnapshot(); 
});

test('should render AdminSummary with multiple products', () => {
    const wrapper = shallow(<AdminSummary ecommerceCount={10} ecommerceTotal={78654} />);
    expect(wrapper).toMatchSnapshot();
});