import React from 'react';
import { shallow } from 'enzyme';
import CustDashboardPage from '../../components/CustDashboardPage';

test('should render CustDashboardPage correctly', () => {
    const wrapper = shallow(<CustDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});