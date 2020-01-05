import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date', //date or amount
    categoryType: '', //men, women, boy, girl
    itemType: '', //men_footwear, men_clothe, men_headwear, men_underwear, men_bag, men_tie, men_belt, men_jewellery 
    startDate: moment(0),
    endDate: moment(0).add(2, 'days')
};

const altFilters = {
    text: 'men shoe',
    sortBy: 'amount', //date or amount
    categoryType: 'men', //men, women, boy, girl
    itemType: 'men_footwear', //men_footwear, men_clothe, men_headwear, men_underwear, men_bag, men_tie, men_belt, men_jewellery 
    startDate: moment(0),
    endDate: moment(0).add(2, 'days')
};

export { filters, altFilters };