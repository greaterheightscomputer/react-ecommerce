import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    categoryType: '', //men, women, boy, girl
    itemType: '', //men_footwear, men_clothe, men_headwear, men_underwear, men_bag, men_tie, men_belt, men_jewellery 
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        //sortBy
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};        
        //category
        case 'CATEGORY_TYPE_MEN':
            return {...state, categoryType: 'amen'};
        case 'CATEGORY_TYPE_WOMEN':
            return {...state, categoryType: 'women'};
        case 'CATEGORY_TYPE_BOY':
            return {...state, categoryType: 'boy'};
        case 'CATEGORY_TYPE_GIRL':
            return {...state, categoryType: 'girl'};        
        //ItemType -Men             
        case 'ITEM_TYPE_MEN_FOOTWEAR':
            return {...state, itemType: 'men_footwear'};
        case 'ITEM_TYPE_MEN_CLOTHE':
            return {...state, itemType: 'men_clothe'};
        case 'ITEM_TYPE_MEN_HEADWEAR':
            return {...state, itemType: 'men_headwear'}; 
        case 'ITEM_TYPE_MEN_UNDERWEAR':
            return {...state, itemType: 'men_underwear'};
        case 'ITEM_TYPE_MEN_BAG':
            return {...state, itemType: 'men_bag'};
        case 'ITEM_TYPE_MEN_TIE':      
            return {...state, itemType: 'men_tie'};  
        case 'ITEM_TYPE_MEN_BELT':
            return {...state, itemType: 'men_belt'};
        case 'ITEM_TYPE_MEN_JEWELLERY':
            return {...state, itemType: 'men_jewellery'};
        //ItemType -Women             
        case 'ITEM_TYPE_WOMEN_FOOTWEAR':
            return {...state, itemType: 'women_footwear'};
        case 'ITEM_TYPE_WOMEN_CLOTHE':
            return {...state, itemType: 'women_clothe'};
        case 'ITEM_TYPE_WOMEN_HEADWEAR':
            return {...state, itemType: 'women_headwear'}; 
        case 'ITEM_TYPE_WOMEN_UNDERWEAR':
            return {...state, itemType: 'women_underwear'};
        case 'ITEM_TYPE_WOMEN_BAG':
            return {...state, itemType: 'women_bag'};
        case 'ITEM_TYPE_WOMEN_TIE':      
            return {...state, itemType: 'women_tie'};  
        case 'ITEM_TYPE_WOMEN_BELT':
            return {...state, itemType: 'women_belt'};
        case 'ITEM_TYPE_WOMEN_JEWELLERY':
            return {...state, itemType: 'women_jewellery'};   
        //ItemType -Boy             
        case 'ITEM_TYPE_BOY_FOOTWEAR':
            return {...state, itemType: 'boy_footwear'};
        case 'ITEM_TYPE_BOY_CLOTHE':
            return {...state, itemType: 'boy_clothe'};
        case 'ITEM_TYPE_BOY_HEADWEAR':
            return {...state, itemType: 'boy_headwear'}; 
        case 'ITEM_TYPE_BOY_UNDERWEAR':
            return {...state, itemType: 'boy_underwear'};
        case 'ITEM_TYPE_BOY_BAG':
            return {...state, itemType: 'boy_bag'};
        case 'ITEM_TYPE_BOY_TIE':      
            return {...state, itemType: 'boy_tie'};  
        case 'ITEM_TYPE_BOY_BELT':
            return {...state, itemType: 'boy_belt'};
        case 'ITEM_TYPE_BOY_JEWELLERY':
            return {...state, itemType: 'boy_jewellery'};        
        //ItemType -Girl             
        case 'ITEM_TYPE_GIRL_FOOTWEAR':
            return {...state, itemType: 'girl_footwear'};
        case 'ITEM_TYPE_GIRL_CLOTHE':
            return {...state, itemType: 'girl_clothe'};
        case 'ITEM_TYPE_GIRL_HEADWEAR':
            return {...state, itemType: 'girl_headwear'}; 
        case 'ITEM_TYPE_GIRL_UNDERWEAR':
            return {...state, itemType: 'girl_underwear'};
        case 'ITEM_TYPE_GIRL_BAG':
            return {...state, itemType: 'girl_bag'};
        case 'ITEM_TYPE_GIRL_TIE':      
            return {...state, itemType: 'girl_tie'};  
        case 'ITEM_TYPE_GIRL_BELT':
            return {...state, itemType: 'girl_belt'};
        case 'ITEM_TYPE_GIRL_JEWELLERY':
            return {...state, itemType: 'girl_jewellery'};            
        //Date
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default: return state;
    }    
};

export default filterReducer;