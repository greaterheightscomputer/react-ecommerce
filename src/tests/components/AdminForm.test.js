import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import AdminForm from '../../components/AdminForm';
import ecommerces from '../fixtures/ecommerces';

test('should render AdminForm with default data correctly', () => {
    const wrapper = shallow(<AdminForm />);
    expect(wrapper).toMatchSnapshot();
});
test('should render AdminForm with data correctly', () => {
    const wrapper = shallow(<AdminForm ecommerce={ecommerces[1]} />);
    expect(wrapper).toMatchSnapshot();
});
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<AdminForm />);
    expect(wrapper).toMatchSnapshot();  //snapshot form tags without values
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0); //snapshot error message
    expect(wrapper).toMatchSnapshot();
});
test('should set description on input change', () => {
    const value = 'Shirt for boy';
    const wrapper = shallow(<AdminForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});
test('should set amount if valid input', () => {
    const value = '122.34';
    const wrapper = shallow(<AdminForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});
test('should set amount if invalid input', () => {
    const value = '122.324';
    const wrapper = shallow(<AdminForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});
test('should set category with valid select', () => {
    const value = 'girl';
    const wrapper = shallow(<AdminForm />);
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('category')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});
test('should set item with valid select', () => {
    const value = 'men_headwear';
    const wrapper = shallow(<AdminForm />);
    wrapper.find('select').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('item')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});
test('should set stock with valid input', () => {
    const value = '2500';
    const wrapper = shallow(<AdminForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('stock')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should call props.onSbmit for valid form submission', () => {
    const onSubmitSpy = jest.fn();        
    const wrapper = shallow(<AdminForm ecommerce={ecommerces[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    onSubmitSpy({
        description: ecommerces[0].description,
        category: ecommerces[0].category,
        item: ecommerces[0].item,
        amount: ecommerces[0].amount,
        stock: ecommerces[0].stock,
        image: ecommerces[0].image,
        imageUrl: ecommerces[0].imageUrl,
        createdAt: ecommerces[0].createdAt
    });    
    // expect(wrapper.state('error')).toBe('');        
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: ecommerces[0].description,
        category: ecommerces[0].category,
        item: ecommerces[0].item,
        amount: ecommerces[0].amount,
        stock: ecommerces[0].stock,
        image: ecommerces[0].image,
        imageUrl: ecommerces[0].imageUrl,
        createdAt: ecommerces[0].createdAt
    }); 
});
test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<AdminForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now); 
});
test('should set new calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<AdminForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('focused')).toBe(focused); 
});
