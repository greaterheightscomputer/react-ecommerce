import React from 'react';
import { shallow } from 'enzyme';
import { AdminAddPage } from '../../components/AdminAddPage';
import ecommerces from '../fixtures/ecommerces';

let startAddEcommerce, history, wrapper;

beforeEach(() => {
    startAddEcommerce = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AdminAddPage startAddEcommerce={startAddEcommerce} history={history} />);
});

test('should render AdminAddPage correctly', () => {    
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {    
    wrapper.find('AdminForm').prop('onSubmit')(ecommerces[1]);
    expect(history.push).toHaveBeenLastCalledWith('/admin_dashboard');
    expect(startAddEcommerce).toHaveBeenLastCalledWith(ecommerces[1]);
});