
import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, categoryTypeMen, categoryTypeWomen, categoryTypeBoy, categoryTypeGirl,
         itemTypeMenFootWear, itemTypeMenClothe, itemTypeMenHeadWear, itemTypeMenUnderWear, itemTypeMenBag, itemTypeMenTie, itemTypeMenBelt, itemTypeMenJewellery,
         itemTypeWomenFootWear, itemTypeWomenClothe, itemTypeWomenHeadWear, itemTypeWomenUnderWear, itemTypeWomenBag, itemTypeWomenTie, itemTypeWomenBelt, itemTypeWomenJewellery,
         itemTypeBoyFootWear, itemTypeBoyClothe, itemTypeBoyHeadWear, itemTypeBoyUnderWear, itemTypeBoyBag, itemTypeBoyTie, itemTypeBoyBelt, itemTypeBoyJewellery,
         itemTypeGirlFootWear, itemTypeGirlClothe, itemTypeGirlHeadWear, itemTypeGirlUnderWear, itemTypeGirlBag, itemTypeGirlTie, itemTypeGirlBelt, itemTypeGirlJewellery,
         setStartDate, setEndDate    
        } from '../../actions/filters';

test('should generate start date filter object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});       
test('should generate end date filter object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
test('should generate text filter object with text value', () => {
    const text='shoe'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});
test('should generate text filter object with default value', () => {    
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
test('should generate sortBy date filter object', () => {        
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'});
});
test('should generate sortBy amount filter object', () => {        
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
});
//category type
test('should generate category type men filter object', () => {        
    expect(categoryTypeMen()).toEqual({ type: 'CATEGORY_TYPE_MEN'});
});
test('should generate category type women filter object', () => {        
    expect(categoryTypeWomen()).toEqual({ type: 'CATEGORY_TYPE_WOMEN'});
});
test('should generate category type boy filter object', () => {        
    expect(categoryTypeBoy()).toEqual({ type: 'CATEGORY_TYPE_BOY'});
});
test('should generate category type boy filter object', () => {        
    expect(categoryTypeGirl()).toEqual({ type: 'CATEGORY_TYPE_GIRL'});
});
//item type - men 
test('should generate item type men footwear filter object', () => {        
    expect(itemTypeMenFootWear()).toEqual({ type: 'ITEM_TYPE_MEN_FOOTWEAR'});
});
test('should generate item type men clothe filter object', () => {        
    expect(itemTypeMenClothe()).toEqual({ type: 'ITEM_TYPE_MEN_CLOTHE'});
});
test('should generate item type men headwear filter object', () => {        
    expect(itemTypeMenHeadWear()).toEqual({ type: 'ITEM_TYPE_MEN_HEADWEAR'});
});
test('should generate item type men underwear filter object', () => {        
    expect(itemTypeMenUnderWear()).toEqual({ type: 'ITEM_TYPE_MEN_UNDERWEAR'});
});
test('should generate item type men bag filter object', () => {        
    expect(itemTypeMenBag()).toEqual({ type: 'ITEM_TYPE_MEN_BAG'});
});
test('should generate item type men tie filter object', () => {        
    expect(itemTypeMenTie()).toEqual({ type: 'ITEM_TYPE_MEN_TIE'});
});
test('should generate item type men belt filter object', () => {        
    expect(itemTypeMenBelt()).toEqual({ type: 'ITEM_TYPE_MEN_BELT'});
});
test('should generate item type men jewellery filter object', () => {        
    expect(itemTypeMenJewellery()).toEqual({ type: 'ITEM_TYPE_MEN_JEWELLERY'});
});
//item type - women 
test('should generate item type women footwear filter object', () => {        
    expect(itemTypeWomenFootWear()).toEqual({ type: 'ITEM_TYPE_WOMEN_FOOTWEAR'});
});
test('should generate item type women clothe filter object', () => {        
    expect(itemTypeWomenClothe()).toEqual({ type: 'ITEM_TYPE_WOMEN_CLOTHE'});
});
test('should generate item type women headwear filter object', () => {        
    expect(itemTypeWomenHeadWear()).toEqual({ type: 'ITEM_TYPE_WOMEN_HEADWEAR'});
});
test('should generate item type women underwear filter object', () => {        
    expect(itemTypeWomenUnderWear()).toEqual({ type: 'ITEM_TYPE_WOMEN_UNDERWEAR'});
});
test('should generate item type women bag filter object', () => {        
    expect(itemTypeWomenBag()).toEqual({ type: 'ITEM_TYPE_WOMEN_BAG'});
});
test('should generate item type women tie filter object', () => {        
    expect(itemTypeWomenTie()).toEqual({ type: 'ITEM_TYPE_WOMEN_TIE'});
});
test('should generate item type women belt filter object', () => {        
    expect(itemTypeWomenBelt()).toEqual({ type: 'ITEM_TYPE_WOMEN_BELT'});
});
test('should generate item type women jewellery filter object', () => {        
    expect(itemTypeWomenJewellery()).toEqual({ type: 'ITEM_TYPE_WOMEN_JEWELLERY'});
});
//item type - boy 
test('should generate item type boy footwear filter object', () => {        
    expect(itemTypeBoyFootWear()).toEqual({ type: 'ITEM_TYPE_BOY_FOOTWEAR'});
});
test('should generate item type boy clothe filter object', () => {        
    expect(itemTypeBoyClothe()).toEqual({ type: 'ITEM_TYPE_BOY_CLOTHE'});
});
test('should generate item type boy headwear filter object', () => {        
    expect(itemTypeBoyHeadWear()).toEqual({ type: 'ITEM_TYPE_BOY_HEADWEAR'});
});
test('should generate item type boy underwear filter object', () => {        
    expect(itemTypeBoyUnderWear()).toEqual({ type: 'ITEM_TYPE_BOY_UNDERWEAR'});
});
test('should generate item type boy bag filter object', () => {        
    expect(itemTypeBoyBag()).toEqual({ type: 'ITEM_TYPE_BOY_BAG'});
});
test('should generate item type boy tie filter object', () => {        
    expect(itemTypeBoyTie()).toEqual({ type: 'ITEM_TYPE_BOY_TIE'});
});
test('should generate item type boy belt filter object', () => {        
    expect(itemTypeBoyBelt()).toEqual({ type: 'ITEM_TYPE_BOY_BELT'});
});
test('should generate item type boy jewellery filter object', () => {        
    expect(itemTypeBoyJewellery()).toEqual({ type: 'ITEM_TYPE_BOY_JEWELLERY'});
});
//item type - girl 
test('should generate item type girl footwear filter object', () => {        
    expect(itemTypeGirlFootWear()).toEqual({ type: 'ITEM_TYPE_GIRL_FOOTWEAR'});
});
test('should generate item type girl clothe filter object', () => {        
    expect(itemTypeGirlClothe()).toEqual({ type: 'ITEM_TYPE_GIRL_CLOTHE'});
});
test('should generate item type girl headwear filter object', () => {        
    expect(itemTypeGirlHeadWear()).toEqual({ type: 'ITEM_TYPE_GIRL_HEADWEAR'});
});
test('should generate item type girl underwear filter object', () => {        
    expect(itemTypeGirlUnderWear()).toEqual({ type: 'ITEM_TYPE_GIRL_UNDERWEAR'});
});
test('should generate item type girl bag filter object', () => {        
    expect(itemTypeGirlBag()).toEqual({ type: 'ITEM_TYPE_GIRL_BAG'});
});
test('should generate item type girl tie filter object', () => {        
    expect(itemTypeGirlTie()).toEqual({ type: 'ITEM_TYPE_GIRL_TIE'});
});
test('should generate item type girl belt filter object', () => {        
    expect(itemTypeGirlBelt()).toEqual({ type: 'ITEM_TYPE_GIRL_BELT'});
});
test('should generate item type girl jewellery filter object', () => {        
    expect(itemTypeGirlJewellery()).toEqual({ type: 'ITEM_TYPE_GIRL_JEWELLERY'});
});