import React from 'react';
import { shallow } from 'enzyme';
import { AdminHeader } from '../../components/AdminHeader';

test('should render AdminHeader correctly', () => {
    const wrapper = shallow(<AdminHeader startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<AdminHeader startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});