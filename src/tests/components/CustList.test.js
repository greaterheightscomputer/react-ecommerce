import React from 'react';
import { shallow } from 'enzyme';
import { CustList } from '../../components/CustList';
import ecommerces from '../fixtures/ecommerces';

test('should render CustList with ecommerces', () => {
    const wrapper = shallow(<CustList ecommerces={ecommerces} />)
    expect(wrapper).toMatchSnapshot();
}); 

test('should render CustList with empty message', () => {
    const wrapper = shallow(<CustList ecommerces={[]} />)
    expect(wrapper).toMatchSnapshot();
}); 