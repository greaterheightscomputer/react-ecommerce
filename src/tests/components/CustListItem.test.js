import React from 'react';
import { shallow } from 'enzyme';
import ecommerces from '../fixtures/ecommerces';
import CustListItem from '../../components/CustListItem';

test('should render EcommerceListItem correctly', () => {
    const wrapper = shallow(<CustListItem {...ecommerces[0]} />);
    expect(wrapper).toMatchSnapshot();
});