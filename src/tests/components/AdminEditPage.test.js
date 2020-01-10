import React from 'react';
import { shallow } from 'enzyme';
import { AdminEditPage } from '../../components/AdminEditPage';
import ecommerces from '../fixtures/ecommerces';

let editEcommerce, startRemoveEcommerce, history, wrapper;

beforeEach(() => {
    editEcommerce = jest.fn();
    startRemoveEcommerce = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <AdminEditPage
            editEcommerce={editEcommerce} 
            startRemoveEcommerce={startRemoveEcommerce}
            history={history} 
            ecommerce={ecommerces[1]} 
        />
    );    
});

test('should render AdminEditPage correctly', () => {    
    expect(wrapper).toMatchSnapshot();
});

test('should handle editEcommerce', () => {    
    wrapper.find('AdminForm').prop('onSubmit')(ecommerces[1]);
    expect(history.push).toHaveBeenLastCalledWith('/admin_dashboard');
    expect(editEcommerce).toHaveBeenLastCalledWith(ecommerces[1].id, ecommerces[1]);
});

test('should handle startRemoveEcommerce', () => {    
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/admin_dashboard');
    expect(startRemoveEcommerce).toHaveBeenLastCalledWith({ id: ecommerces[1].id });
});