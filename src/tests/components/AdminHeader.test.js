import React from 'react';
import { shallow } from 'enzyme';
import AdminHeader from '../../components/AdminHeader';

test('should render AdminHeader correctly', () => {
    const wrapper = shallow(<AdminHeader />);
    expect(wrapper).toMatchSnapshot();
});