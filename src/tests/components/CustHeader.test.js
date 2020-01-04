import React from 'react';
import { shallow } from 'enzyme';
import CustHeader from '../../components/CustHeader';

test('should render CustHeader correctly', () => {
    const wrapper = shallow(<CustHeader />);
    expect(wrapper).toMatchSnapshot();
});