import { addEcommerce, removeEcommerce, editEcommerce } from '../../actions/ecommerces';

test('should setup remove ecommerce action object', () => {
    const action = removeEcommerce({ id: 'abc123' });
    expect(action).toEqual({
        type: 'REMOVE_ECOMMERCE',
        id: 'abc123'
    });
});

test('should setup edit ecommerce action object', () => {
    const value = 'men shoe'
    const action = editEcommerce('abc123', { description: value });
    expect(action).toEqual({
        type: 'EDIT_ECOMMERCE',
        id: 'abc123',
        updates: {
            description: value
        }
    });    
});

test('should setup add ecommerce action object with provided values', () => {
    const ecommerceData = {
        description: 'men shoe',
        category: 'men',
        item: 'men_footwear',
        amount: 25900,
        image: 'shoe.png',
        imageUrl: '',
        stock: 3000, 
        createdAt: 1000
    }
    const action = addEcommerce(ecommerceData);
    expect(action).toEqual({
        type: 'ADD_ECOMMERCE',        
        ecommerce: {
            id: expect.any(String),
            ...ecommerceData
        }
    });
});

test('should setup add ecommerce action object with default values', () => {    
    const action = addEcommerce();
    expect(action).toEqual({
        type: 'ADD_ECOMMERCE',        
        ecommerce: {
            id: expect.any(String),
            description: '',
            category: '',
            item: '',
            amount: 0,
            image: '',
            imageUrl: '',
            stock: 0, 
            createdAt: 0
        }
    });
});