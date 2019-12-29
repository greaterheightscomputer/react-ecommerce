const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    categoryType: '', //men, women, boy, girl
    itemType: '', //men_shoe, men_clothe, men_underwear, men_slipper, men_bag, men_tie, men_belt, etc    
    startDate: undefined,
    endDate: undefined
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
            return {...state, categoryType: 'men'};
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
        //Date
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default: return state;
    }    
};

export default filterReducer;