import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date', //date or amount
        categoryType: '', //men, women, boy, girl
        itemType: '', //men_footwear, men_clothe, men_headwear, men_underwear, men_bag, men_tie, men_belt, men_jewellery 
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});
test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', 
        categoryType: '', 
        itemType: '', 
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});
test('should set text', () => {
    const text = 'shirt for boy';    
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});
test('should set startDate filter', () => {
    const startDate = moment();    
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});
test('should set endDate filter', () => {
    const endDate = moment();    
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});
//categoryType 
test('should set categoryType to be amen filter', () => {       
    const action = {
        type: 'CATEGORY_TYPE_MEN',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.categoryType).toBe('amen');
});
test('should set categoryType to be women filter', () => {       
    const action = {
        type: 'CATEGORY_TYPE_WOMEN',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.categoryType).toBe('women');
});
test('should set categoryType to be boy filter', () => {       
    const action = {
        type: 'CATEGORY_TYPE_BOY',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.categoryType).toBe('boy');
});
test('should set categoryType to be girl filter', () => {       
    const action = {
        type: 'CATEGORY_TYPE_GIRL',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.categoryType).toBe('girl');
});
//itemType - men
test('should set itemType to be men_footwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_MEN_FOOTWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('men_footwear');
});
test('should set itemType to be men_clothe filter', () => {       
    const action = {
        type: 'ITEM_TYPE_MEN_CLOTHE',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('men_clothe');
});
test('should set itemType to be men_headwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_MEN_HEADWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('men_headwear');
});
test('should set itemType to be men_underwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_MEN_UNDERWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('men_underwear');
});
test('should set itemType to be men_bag filter', () => {       
    const action = {
        type: 'ITEM_TYPE_MEN_BAG',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('men_bag');
});
test('should set itemType to be men_tie filter', () => {       
    const action = {
        type: 'ITEM_TYPE_MEN_TIE',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('men_tie');
});
test('should set itemType to be men_belt filter', () => {       
    const action = {
        type: 'ITEM_TYPE_MEN_BELT',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('men_belt');
});
test('should set itemType to be men_jewellery filter', () => {       
    const action = {
        type: 'ITEM_TYPE_MEN_JEWELLERY',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('men_jewellery');
});

//itemType - women
test('should set itemType to be women_footwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_WOMEN_FOOTWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('women_footwear');
});
test('should set itemType to be women_clothe filter', () => {       
    const action = {
        type: 'ITEM_TYPE_WOMEN_CLOTHE',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('women_clothe');
});
test('should set itemType to be women_headwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_WOMEN_HEADWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('women_headwear');
});
test('should set itemType to be women_underwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_WOMEN_UNDERWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('women_underwear');
});
test('should set itemType to be women_bag filter', () => {       
    const action = {
        type: 'ITEM_TYPE_WOMEN_BAG',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('women_bag');
});
test('should set itemType to be women_tie filter', () => {       
    const action = {
        type: 'ITEM_TYPE_WOMEN_TIE',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('women_tie');
});
test('should set itemType to be women_belt filter', () => {       
    const action = {
        type: 'ITEM_TYPE_WOMEN_BELT',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('women_belt');
});
test('should set itemType to be women_jewellery filter', () => {       
    const action = {
        type: 'ITEM_TYPE_WOMEN_JEWELLERY',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('women_jewellery');
});

//itemType - boy
test('should set itemType to be boy_footwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_BOY_FOOTWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('boy_footwear');
});
test('should set itemType to be boy_clothe filter', () => {       
    const action = {
        type: 'ITEM_TYPE_BOY_CLOTHE',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('boy_clothe');
});
test('should set itemType to be boy_headwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_BOY_HEADWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('boy_headwear');
});
test('should set itemType to be boy_underwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_BOY_UNDERWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('boy_underwear');
});
test('should set itemType to be boy_bag filter', () => {       
    const action = {
        type: 'ITEM_TYPE_BOY_BAG',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('boy_bag');
});
test('should set itemType to be boy_tie filter', () => {       
    const action = {
        type: 'ITEM_TYPE_BOY_TIE',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('boy_tie');
});
test('should set itemType to be boy_belt filter', () => {       
    const action = {
        type: 'ITEM_TYPE_BOY_BELT',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('boy_belt');
});
test('should set itemType to be boy_jewellery filter', () => {       
    const action = {
        type: 'ITEM_TYPE_BOY_JEWELLERY',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('boy_jewellery');
});

//itemType - girl
test('should set itemType to be girl_footwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_GIRL_FOOTWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('girl_footwear');
});
test('should set itemType to be girl_clothe filter', () => {       
    const action = {
        type: 'ITEM_TYPE_GIRL_CLOTHE',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('girl_clothe');
});
test('should set itemType to be girl_headwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_GIRL_HEADWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('girl_headwear');
});
test('should set itemType to be girl_underwear filter', () => {       
    const action = {
        type: 'ITEM_TYPE_GIRL_UNDERWEAR',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('girl_underwear');
});
test('should set itemType to be girl_bag filter', () => {       
    const action = {
        type: 'ITEM_TYPE_GIRL_BAG',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('girl_bag');
});
test('should set itemType to be girl_tie filter', () => {       
    const action = {
        type: 'ITEM_TYPE_GIRL_TIE',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('girl_tie');
});
test('should set itemType to be girl_belt filter', () => {       
    const action = {
        type: 'ITEM_TYPE_GIRL_BELT',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('girl_belt');
});
test('should set itemType to be girl_jewellery filter', () => {       
    const action = {
        type: 'ITEM_TYPE_GIRL_JEWELLERY',        
    };
    const state = filtersReducer(undefined, action);
    expect(state.itemType).toBe('girl_jewellery');
});