// SET_TEXT_FILTER  
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE' 
});    
// SORT_BY_AMOUNT    
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//CategoryType
export const categoryTypeMen = () => ({
    type: 'CATEGORY_TYPE_MEN'
});
export const categoryTypeWomen = () => ({
    type: 'CATEGORY_TYPE_WOMEN'
});
export const categoryTypeBoy = () => ({
    type: 'CATEGORY_TYPE_BOY'
});
export const categoryTypeGirl = () => ({
    type: 'CATEGORY_TYPE_GIRL'
});
//itemType - Men
export const itemTypeMenFootWear = () => ({
    type: 'ITEM_TYPE_MEN_FOOTWEAR'
}); 
export const itemTypeMenClothe = () => ({   
    type: 'ITEM_TYPE_MEN_CLOTHE'     
}); 
export const itemTypeMenHeadWear = () => ({
    type: 'ITEM_TYPE_MEN_HEADWEAR'
}); 
export const itemTypeMenUnderWear = () => ({
    type: 'ITEM_TYPE_MEN_UNDERWEAR'
}); 
export const itemTypeMenBag = () => ({
    type: 'ITEM_TYPE_MEN_BAG'
}); 
export const itemTypeMenTie = () => ({
    type: 'ITEM_TYPE_MEN_TIE'
}); 
export const itemTypeMenBelt = () => ({
    type: 'ITEM_TYPE_MEN_BELT'
}); 
export const itemTypeMenJewellery = () => ({
    type: 'ITEM_TYPE_MEN_JEWELLERY'
}); 
//itemType - Women
//itemType - Boy
//itemType - Girl
// SET_START_DATE   
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});