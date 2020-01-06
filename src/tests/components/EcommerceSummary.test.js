import React from 'react';
import { shallow } from 'enzyme';
import { EcommerceSummary } from '../../components/EcommerceSummary';

test('should render EcommerceSummary with 1 product', () => {
    const wrapper = shallow(<EcommerceSummary ecommerceCount={1} ecommerceTotal={3450} />);
    expect(wrapper).toMatchSnapshot(); 
});

test('should render EcommerceSummary with multiple products', () => {
    const wrapper = shallow(<EcommerceSummary ecommerceCount={10} ecommerceTotal={78654} />);
    expect(wrapper).toMatchSnapshot();
});