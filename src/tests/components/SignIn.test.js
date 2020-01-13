import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from '../../components/SignIn';

test('should render SignIn with default data correctly', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
});

test('should set email on input change', () => {
    const value = 'adebarakhadijat@gmail.com';
    const wrapper = shallow(<SignIn />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('email')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set password on input change', () => {
    const value = '123abc';
    const wrapper = shallow(<SignIn />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('password')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should call props.onSbmit for valid form submission', () => {
    const onSubmitSpy = jest.fn();        
    const wrapper = shallow(<SignIn startLogin={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    onSubmitSpy({
        email: 'adebarakhadijat@gmail.com',
        password: '123abc'        
    });            
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        email: 'adebarakhadijat@gmail.com',
        password: '123abc'
    }); 
});

