import React from 'react';
import { shallow } from 'enzyme';
import ecommerces from '../fixtures/ecommerces';
import AdminListItem from '../../components/AdminListItem';

test('should render EcommerceListItem correctly', () => {
    const wrapper = shallow(<AdminListItem {...ecommerces[2]} />);
    expect(wrapper).toMatchSnapshot();
});