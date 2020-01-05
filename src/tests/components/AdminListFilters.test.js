import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { AdminListFilters } from '../../components/AdminListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, categoryTypeMen, categoryTypeWomen, categoryTypeBoy, categoryTypeGirl, 
    itemTypeBoyFootWear, itemTypeBoyClothe, itemTypeBoyHeadWear, itemTypeBoyUnderWear, itemTypeBoyBag, itemTypeBoyTie, itemTypeBoyBelt, itemTypeBoyJewellery, 
    itemTypeWomenFootWear, itemTypeWomenClothe, itemTypeWomenHeadWear, itemTypeWomenUnderWear, itemTypeWomenBag, itemTypeWomenTie, itemTypeWomenBelt, itemTypeWomenJewellery,
    itemTypeMenFootWear, itemTypeMenClothe, itemTypeMenHeadWear, itemTypeMenUnderWear, itemTypeMenBag, itemTypeMenTie, itemTypeMenBelt, itemTypeMenJewellery,
    itemTypeGirlFootWear, itemTypeGirlClothe, itemTypeGirlHeadWear, itemTypeGirlUnderWear, itemTypeGirlBag, itemTypeGirlTie, itemTypeGirlBelt, itemTypeGirlJewellery,
    setStartDate, setEndDate, wrapper;

beforeEach(()=> {
    setTextFilter=jest.fn();  sortByDate=jest.fn(); sortByAmount=jest.fn(); setStartDate=jest.fn(); setEndDate=jest.fn(); 
    categoryTypeBoy=jest.fn(); categoryTypeGirl=jest.fn(); categoryTypeMen=jest.fn(); categoryTypeWomen=jest.fn();  
    itemTypeBoyFootWear=jest.fn(); itemTypeBoyClothe=jest.fn(); itemTypeBoyHeadWear=jest.fn(); itemTypeBoyUnderWear=jest.fn(); itemTypeBoyBag=jest.fn(); itemTypeBoyTie=jest.fn(); itemTypeBoyBelt=jest.fn(); itemTypeBoyJewellery=jest.fn(); 
    itemTypeGirlFootWear=jest.fn(); itemTypeGirlClothe=jest.fn(); itemTypeGirlHeadWear=jest.fn(); itemTypeGirlUnderWear=jest.fn(); itemTypeGirlBag=jest.fn(); itemTypeGirlTie=jest.fn(); itemTypeGirlBelt=jest.fn(); itemTypeGirlJewellery=jest.fn(); 
    itemTypeMenFootWear=jest.fn(); itemTypeMenClothe=jest.fn(); itemTypeMenHeadWear=jest.fn(); itemTypeMenUnderWear=jest.fn(); itemTypeMenBag=jest.fn(); itemTypeMenTie=jest.fn(); itemTypeMenBelt=jest.fn(); itemTypeMenJewellery=jest.fn(); 
    itemTypeWomenFootWear=jest.fn(); itemTypeWomenClothe=jest.fn(); itemTypeWomenHeadWear=jest.fn(); itemTypeWomenUnderWear=jest.fn(); itemTypeWomenBag=jest.fn(); itemTypeWomenTie=jest.fn(); itemTypeWomenBelt=jest.fn(); itemTypeWomenJewellery=jest.fn(); 
    wrapper = shallow(
        <AdminListFilters 
            filters={filters} setTextFilter={setTextFilter} sortByDate={sortByDate} sortByAmount={sortByAmount} setStartDate={setStartDate} setEndDate={setEndDate}
            categoryTypeMen={categoryTypeMen}  categoryTypeBoy={categoryTypeBoy}  categoryTypeGirl={categoryTypeGirl}  categoryTypeWomen={categoryTypeWomen}
            itemTypeBoyFootWear={itemTypeBoyFootWear} itemTypeBoyClothe={itemTypeBoyClothe} itemTypeBoyHeadWear={itemTypeBoyHeadWear} itemTypeBoyUnderWear={itemTypeBoyUnderWear} itemTypeBoyBag={itemTypeBoyBag} itemTypeBoyTie={itemTypeBoyTie} itemTypeBoyBelt={itemTypeBoyBelt} itemTypeBoyJewellery={itemTypeBoyJewellery} 
            itemTypeWomenFootWear={itemTypeWomenFootWear} itemTypeWomenClothe={itemTypeWomenClothe} itemTypeWomenHeadWear={itemTypeWomenHeadWear} itemTypeWomenUnderWear={itemTypeWomenUnderWear} itemTypeWomenBag={itemTypeWomenBag} itemTypeWomenTie={itemTypeWomenTie} itemTypeWomenBelt={itemTypeWomenBelt} itemTypeWomenJewellery={itemTypeWomenJewellery}
            itemTypeMenFootWear={itemTypeMenFootWear} itemTypeMenClothe={itemTypeMenClothe} itemTypeMenHeadWear={itemTypeMenHeadWear} itemTypeMenUnderWear={itemTypeMenUnderWear} itemTypeMenBag={itemTypeMenBag} itemTypeMenTie={itemTypeMenTie} itemTypeMenBelt={itemTypeMenBelt} itemTypeMenJewellery={itemTypeMenJewellery}
            itemTypeGirlFootWear={itemTypeGirlFootWear} itemTypeGirlClothe={itemTypeGirlClothe} itemTypeGirlHeadWear={itemTypeGirlHeadWear} itemTypeGirlUnderWear={itemTypeGirlUnderWear} itemTypeGirlBag={itemTypeGirlBag} itemTypeGirlTie={itemTypeGirlTie} itemTypeGirlBelt={itemTypeGirlBelt} itemTypeGirlJewellery={itemTypeGirlJewellery}            
        />
        );
});

test('should render AdminListFilters with default data', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should render AdminListFilters with data', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});
test('should set text change', () => {
    const value = 'boy cap';
    wrapper.find('input').simulate('change', { target: { value }});
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').at(0).simulate('change', {target: { value }});
    expect(sortByDate).toHaveBeenCalled();
});
test('should sort by amount', () => {
    const value = 'amount';    
    wrapper.find('select').at(0).simulate('change', {target: { value }});
    expect(sortByAmount).toHaveBeenCalled();
});
test('should set date range picker', () => {
    const startDate = moment(0).add(2, 'years');
    const endDate = moment(0).add(4, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('should set date focus', () => {
    const focused = 'startDate';    
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('focused')).toBe(focused);    
});
//category
test('should set category type for men', () => {
    const value = 'amen';    
    wrapper.find('select').at(1).simulate('change', {target: { value }});
    expect(categoryTypeMen).toHaveBeenCalled();
});
test('should set category type for women', () => {
    const value = 'women';    
    wrapper.find('select').at(1).simulate('change', {target: { value }});
    expect(categoryTypeWomen).toHaveBeenCalled();
});
test('should set category type for boy', () => {
    const value = 'boy';    
    wrapper.find('select').at(1).simulate('change', {target: { value }});
    expect(categoryTypeBoy).toHaveBeenCalled();
});
test('should set category type for girl', () => {
    const value = 'girl';    
    wrapper.find('select').at(1).simulate('change', {target: { value }});
    expect(categoryTypeGirl).toHaveBeenCalled();
});
//item - girl
test('should set item type footwear for girl', () => {
    const value = 'girl_footwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeGirlFootWear).toHaveBeenCalled();
});        
test('should set item type clothe for girl', () => {
    const value = 'girl_clothe';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeGirlClothe).toHaveBeenCalled();
});        
test('should set item type headwear for girl', () => {
    const value = 'girl_headwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeGirlHeadWear).toHaveBeenCalled();
});       
test('should set item type underwear for girl', () => {
    const value = 'girl_underwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeGirlUnderWear).toHaveBeenCalled();
});        
test('should set item type bag for girl', () => {
    const value = 'girl_bag';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeGirlBag).toHaveBeenCalled();
});  
test('should set item type tie for girl', () => {
    const value = 'girl_tie';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeGirlTie).toHaveBeenCalled();
});    
test('should set item type belt for girl', () => {
    const value = 'girl_belt';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeGirlBelt).toHaveBeenCalled();
}); 
test('should set item type belt for girl', () => {
    const value = 'girl_jewellery';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeGirlJewellery).toHaveBeenCalled();
});        
//item - boy
test('should set item type footwear for boy', () => {
    const value = 'boy_footwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeBoyFootWear).toHaveBeenCalled();
});        
test('should set item type clothe for boy', () => {
    const value = 'boy_clothe';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeBoyClothe).toHaveBeenCalled();
});        
test('should set item type headwear for boy', () => {
    const value = 'boy_headwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeBoyHeadWear).toHaveBeenCalled();
});       
test('should set item type underwear for boy', () => {
    const value = 'boy_underwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeBoyUnderWear).toHaveBeenCalled();
});        
test('should set item type bag for boy', () => {
    const value = 'boy_bag';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeBoyBag).toHaveBeenCalled();
});  
test('should set item type tie for boy', () => {
    const value = 'boy_tie';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeBoyTie).toHaveBeenCalled();
});    
test('should set item type belt for boy', () => {
    const value = 'boy_belt';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeBoyBelt).toHaveBeenCalled();
}); 
test('should set item type belt for boy', () => {
    const value = 'boy_jewellery';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeBoyJewellery).toHaveBeenCalled();
});        
//item - men
test('should set item type footwear for men', () => {
    const value = 'men_footwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeMenFootWear).toHaveBeenCalled();
});        
test('should set item type clothe for men', () => {
    const value = 'men_clothe';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeMenClothe).toHaveBeenCalled();
});        
test('should set item type headwear for men', () => {
    const value = 'men_headwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeMenHeadWear).toHaveBeenCalled();
});       
test('should set item type underwear for men', () => {
    const value = 'men_underwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeMenUnderWear).toHaveBeenCalled();
});        
test('should set item type bag for men', () => {
    const value = 'men_bag';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeMenBag).toHaveBeenCalled();
});  
test('should set item type tie for men', () => {
    const value = 'men_tie';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeMenTie).toHaveBeenCalled();
});    
test('should set item type belt for men', () => {
    const value = 'men_belt';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeMenBelt).toHaveBeenCalled();
}); 
test('should set item type belt for men', () => {
    const value = 'men_jewellery';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeMenJewellery).toHaveBeenCalled();
});      
//item - women
test('should set item type footwear for women', () => {
    const value = 'women_footwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeWomenFootWear).toHaveBeenCalled();
});        
test('should set item type clothe for women', () => {
    const value = 'women_clothe';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeWomenClothe).toHaveBeenCalled();
});        
test('should set item type headwear for women', () => {
    const value = 'women_headwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeWomenHeadWear).toHaveBeenCalled();
});       
test('should set item type underwear for women', () => {
    const value = 'women_underwear';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeWomenUnderWear).toHaveBeenCalled();
});        
test('should set item type bag for women', () => {
    const value = 'women_bag';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeWomenBag).toHaveBeenCalled();
});  
test('should set item type tie for women', () => {
    const value = 'women_tie';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeWomenTie).toHaveBeenCalled();
});    
test('should set item type belt for women', () => {
    const value = 'women_belt';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeWomenBelt).toHaveBeenCalled();
}); 
test('should set item type belt for women', () => {
    const value = 'women_jewellery';    
    wrapper.find('select').at(2).simulate('change', {target: { value }});
    expect(itemTypeWomenJewellery).toHaveBeenCalled();
});      