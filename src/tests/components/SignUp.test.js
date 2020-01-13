import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../../components/SignUp';

test('should render SignUp with default values', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<SignUp />);    
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0); 
    expect(wrapper).toMatchSnapshot();
});

test('should set email on input change', () => {
    const value = 'khadijat@g.com';
    const wrapper = shallow(<SignUp />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('email')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set password on input change', () => {
    const value = '123abce';
    const wrapper = shallow(<SignUp />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('password')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set firstName on input change', () => {
    const value = 'Khadijat';
    const wrapper = shallow(<SignUp />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('firstName')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set lastName on input change', () => {
    const value = 'Abimbola';
    const wrapper = shallow(<SignUp />);
    wrapper.find('input').at(3).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('lastName')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set phone on input change', () => {
    const value = '08037899550';
    const wrapper = shallow(<SignUp />);
    wrapper.find('input').at(4).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('phone')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});
