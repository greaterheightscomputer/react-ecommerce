import moment from 'moment';
import selectEcommerces from '../../selectors/ecommerces';
import ecommerces from '../fixtures/ecommerces';

test('should filter by text value', () => {
    const filters = {
        text: 's',        
        sortBy: 'date', //date or amount
        categoryType: '', //men, women, boy, girl
        itemType: '', //men_footwear, men_clothe, men_headwear, men_underwear, men_bag, men_tie, men_belt, men_jewellery 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[2], ecommerces[0], ecommerces[1]]);    
});
test('should filter by startDate', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: '', 
        itemType: '', 
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[2], ecommerces[3], ecommerces[0]]);    
});
test('should filter by endDate', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: '', 
        itemType: '', 
        startDate: undefined,
        endDate: moment(0).add(3, 'days')
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[3], ecommerces[0], ecommerces[1]]);    
}); 
test('should filter by date', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: '', 
        itemType: '', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[2], ecommerces[3], ecommerces[0], ecommerces[1]]);    
}); 
test('should filter by amount', () => {
    const filters = {
        text: '',        
        sortBy: 'amount', 
        categoryType: '', 
        itemType: '', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[0], ecommerces[1], ecommerces[3], ecommerces[2]]);    
}); 
//category
test('should filter by category men', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: 'amen', 
        itemType: '', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[0]]);    
}); 
test('should filter by category women', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: 'women', 
        itemType: '', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[1]]);    
}); 
test('should filter by category boy', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: 'boy', 
        itemType: '', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[2]]);    
}); 
test('should filter by category girl', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: 'girl', 
        itemType: '', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[3]]);    
}); 
//item
test('should filter by item for men_footwear', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: '', 
        itemType: 'men_footwear', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[0]]);    
}); 
test('should filter by item for women_headwear', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: '', 
        itemType: 'women_headwear', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[1]]);    
}); 
test('should filter by item for boy_clothe', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: '', 
        itemType: 'boy_clothe', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[2]]);    
}); 
test('should filter by item for girl_headwear', () => {
    const filters = {
        text: '',        
        sortBy: 'date', 
        categoryType: '', 
        itemType: 'girl_headwear', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectEcommerces(ecommerces, filters);
    expect(result).toEqual([ecommerces[3]]);    
});
