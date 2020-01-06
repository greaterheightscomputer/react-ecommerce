import selectEcommerceTotal from '../../selectors/ecommerce-total';
import ecommerces from '../fixtures/ecommerces';

test('should return o if no ecommerces', () => {
    const action = selectEcommerceTotal([]);
    expect(action).toBe(0);
});

test('should correctly add up a single ecommerce', () => {
    const action = selectEcommerceTotal([ecommerces[1]]);
    expect(action).toBe(4500)
});

test('should correctly add up multiple ecommerce', () => {
    const action = selectEcommerceTotal(ecommerces);
    expect(action).toBe(19850)
});