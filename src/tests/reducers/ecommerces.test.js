import ecommercesReducer from '../../reducers/ecommerces';
import ecommerces from '../fixtures/ecommerces';
import ecommerceReducer from '../../reducers/ecommerces';

test('should set default state', () => {
    const state = ecommercesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove ecommerce by id', () => {
    const action = {
        type: 'REMOVE_ECOMMERCE',
        id: ecommerces[2].id
    }
    const state = ecommercesReducer(ecommerces, action);
    expect(state).toEqual([ecommerces[0], ecommerces[1], ecommerces[3]]);
});

test('should remove ecommerce if id not found', () => {
    const action = {
        type: 'REMOVE_ECOMMERCE',
        id: '001'
    }
    const state = ecommercesReducer(ecommerces, action);
    expect(state).toEqual(ecommerces);
});

test('should add an ecommerce', () => {
    const ecommerce = {
        id: '05',
        description: 'head tie for men', 
        category: 'amen', 
        item: 'men_headwear',
        amount: 5000,           
        image: 'headtie.jpeg', 
        imageUrl:'',
        stock: 300,
        createdAt: 2000
    };
    const action = {
        type: 'ADD_ECOMMERCE',
        ecommerce
    };
    const state = ecommercesReducer(ecommerces, action);
    expect(state).toEqual([...ecommerces, ecommerce]);
});

test('should edit an ecommerce', () => {
    const amount = 2550;
    const action = {
        type: 'EDIT_ECOMMERCE',
        id: ecommerces[2].id,
        updates: {
            amount
        }
    };
    const state = ecommercesReducer(ecommerces, action);
    expect(state[2].amount).toBe(amount);
});

test('should edit an ecommerce if id not found', () => {
    const amount = 2550;
    const action = {
        type: 'EDIT_ECOMMERCE',
        id: '006',
        updates: {
            amount
        }
    };
    const state = ecommercesReducer(ecommerces, action);
    expect(state).toEqual(ecommerces);
});

test('should set ecommerce', () => {
    const action = {
        type: 'SET_ECOMMERCE',
        ecommerces: [ecommerces[2]]
    };
    const state = ecommerceReducer(ecommerces, action);
    expect(state).toEqual([ecommerces[2]]);
});



