import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddEcommerce, addEcommerce, removeEcommerce, startRemoveEcommerce, 
         editEcommerce, startEditEcommerce, setEcommerce, startSetEcommerce } from '../../actions/ecommerces';
import ecommerces from '../fixtures/ecommerces';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => { //storing the dummy data in firebase
    const ecommerceData = {};
    ecommerces.forEach(({ id, description, category, item, amount, image, imageUrl, stock, createdAt }) => {
        ecommerceData[id] = { description, category, item, amount, image, imageUrl, stock, createdAt };
    }); 
    database.ref('ecommerces').set(ecommerceData).then(() => done());
});

test('should setup remove ecommerce action object', () => {
    const action = removeEcommerce({ id: 'abc123' });
    expect(action).toEqual({
        type: 'REMOVE_ECOMMERCE',
        id: 'abc123'
    });
});

test('should remove ecommerce from firebase', (done) => {
    const store = createMockStore({});
    const id = ecommerces[3].id;
    store.dispatch(startRemoveEcommerce({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_ECOMMERCE',
            id
        });
        return database.ref(`ecommerces/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('should edit ecommerce from firebase', (done) => {
    const store = createMockStore({});
    const id = ecommerces[0].id;
    const updates = { stock: 300 };
    store.dispatch(startEditEcommerce(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_ECOMMERCE',
            id,
            updates
        });
        return database.ref(`ecommerces/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().stock).toBe(updates.stock);
        done();
    });
});

test('should setup add ecommerce action object with provided values', () => {    
    const action = addEcommerce(ecommerces[3]);
    expect(action).toEqual({
        type: 'ADD_ECOMMERCE',        
        ecommerce: ecommerces[3]
    });
});

//asynchronous test case
test('should add ecommerce to database and store', (done) => {
    const store = createMockStore({});
    const ecommerceData = {        
        description: 'shoe for women',
        category: 'women',
        item: 'women_footwear',
        amount: 12330,
        image: 'shoe.jpg',
        imageUrl: '',
        stock: 30, 
        createdAt: 1000
    };

    store.dispatch(startAddEcommerce(ecommerceData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: ADD_ECOMMERCE,
            ecommerce: {
                id: expect.any(String),
                ...ecommerceData
            }
        });

        //fetching data from db
        return database.ref(`ecommerces/${actions[0].ecommerce.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(ecommerceData);
        done();
    });        
});

test('should add ecommerce with default to database and store', (done) => {
    const store = createMockStore({});
    const ecommerceDefault = {        
        description: '',
        category: '',
        item: '',
        amount: 0,
        image: '',
        imageUrl: '',
        stock: 0, 
        createdAt: 0
    };

    store.dispatch(startAddEcommerce({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_ECOMMERCE',
            ecommerce: {
                id: expect.any(String),
                ...ecommerceDefault
            }
        });

        //fetching data from db
        return database.ref(`ecommerces/${actions[0].ecommerce.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(ecommerceDefault);
        done();
    }); 
});

test('should setup set ecommerce action object with data', () => {
    const action = setEcommerce(ecommerces);
    expect(action).toEqual({
        type: 'SET_ECOMMERCE',
        ecommerces
    });
});

test('should fetch the ecommerces from firebase', (done) => { //fetch data from the dummy data
    const store = createMockStore({});
    store.dispatch(startSetEcommerce()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_ECOMMERCE',
            ecommerces
        });
        done();
    });
});