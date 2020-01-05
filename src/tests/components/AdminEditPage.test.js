import React from 'react';
import { shallow } from 'enzyme';
import { AdminEditPage } from '../../components/AdminEditPage';
import ecommerces from '../fixtures/ecommerces';

let editEcommerce, removeEcommerce, history, wrapper;

beforeEach(() => {
    editEcommerce = jest.fn();
    removeEcommerce = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <AdminEditPage
            editEcommerce={editEcommerce} 
            removeEcommerce={removeEcommerce}
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

test('should handle removecommerce', () => {    
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/admin_dashboard');
    expect(removeEcommerce).toHaveBeenLastCalledWith({ id: ecommerces[1].id });
});