import React from 'react';
import { shallow } from 'enzyme';
import { AdminEditPage } from '../../components/AdminEditPage';
import ecommerces from '../fixtures/ecommerces';

let startEditEcommerce, startRemoveEcommerce, history, wrapper;

beforeEach(() => {
    startEditEcommerce = jest.fn();
    startRemoveEcommerce = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <AdminEditPage
        startEditEcommerce={startEditEcommerce} 
            startRemoveEcommerce={startRemoveEcommerce}
            history={history} 
            ecommerce={ecommerces[1]} 
        />
    );    
});

test('should render AdminEditPage correctly', () => {    
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditEcommerce', () => {    
    wrapper.find('AdminForm').prop('onSubmit')(ecommerces[1]);
    expect(history.push).toHaveBeenLastCalledWith('/admin_dashboard');
    expect(startEditEcommerce).toHaveBeenLastCalledWith(ecommerces[1].id, ecommerces[1]);
});

test('should handle startRemoveEcommerce', () => {    
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/admin_dashboard');
    expect(startRemoveEcommerce).toHaveBeenLastCalledWith({ id: ecommerces[1].id });
});