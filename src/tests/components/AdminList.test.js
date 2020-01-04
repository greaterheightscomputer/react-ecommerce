import React from 'react';
import { shallow } from 'enzyme';
import { AdminList } from '../../components/AdminList';
import ecommerces from '../fixtures/ecommerces';

test('should render AdminList with ecommerces', () => {
    const wrapper = shallow(<AdminList ecommerces={ecommerces} />)
    expect(wrapper).toMatchSnapshot();
}); 

test('should render AdminList with empty message', () => {
    const wrapper = shallow(<AdminList ecommerces={[]} />)
    expect(wrapper).toMatchSnapshot();
}); 