import React from 'react';
import { connect } from 'react-redux';
import { select, setTextFilter, sortByDate, sortByAmount, categoryTypeMen, categoryTypeWomen, categoryTypeBoy, categoryTypeGirl, 
    itemTypeBoyFootWear, itemTypeBoyClothe, itemTypeBoyHeadWear, itemTypeBoyUnderWear, itemTypeBoyBag, itemTypeBoyTie, itemTypeBoyBelt, itemTypeBoyJewellery, 
    itemTypeWomenFootWear, itemTypeWomenClothe, itemTypeWomenHeadWear, itemTypeWomenUnderWear, itemTypeWomenBag, itemTypeWomenTie, itemTypeWomenBelt, itemTypeWomenJewellery,
    itemTypeMenFootWear, itemTypeMenClothe, itemTypeMenHeadWear, itemTypeMenUnderWear, itemTypeMenBag, itemTypeMenTie, itemTypeMenBelt, itemTypeMenJewellery,
    itemTypeGirlFootWear, itemTypeGirlClothe, itemTypeGirlHeadWear, itemTypeGirlUnderWear, itemTypeGirlBag, itemTypeGirlTie, itemTypeGirlBelt, itemTypeGirlJewellery
    // setStartDate, setEndDate      
        } from '../../actions/filters';

export class CustListFilters extends React.Component {    
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };
    onCategorTypeChange = (e) => {
        if(e.target.value === 'amen') {
            this.props.categoryTypeMen();
        }else if (e.target.value === 'women') {
            this.props.categoryTypeWomen();
        } else if (e.target.value === 'boy') {
            this.props.categoryTypeBoy();
        } else if (e.target.value === 'girl') {
            this.props.categoryTypeGirl();
        }
    };
    onItemTypeChange = (e) => {
        //boy_item
        if (e.target.value === 'boy_footwear') { 
            this.props.itemTypeBoyFootWear();  
        } else if (e.target.value === 'boy_clothe') { 
            this.props.itemTypeBoyClothe();
        } else if (e.target.value === 'boy_headwear') { 
            this.props.itemTypeBoyHeadWear();
        } else if (e.target.value === 'boy_underwear') {   
            this.props.itemTypeBoyUnderWear();
        } else if (e.target.value === 'boy_bag') { 
            this.props.itemTypeBoyBag();
        } else if (e.target.value === 'boy_tie') { 
            this.props.itemTypeBoyTie();
        } else if (e.target.value === 'boy_belt') { 
            this.props.itemTypeBoyBelt();
        } else if (e.target.value === 'boy_jewellery') { 
            this.props.itemTypeBoyJewellery();
        }
        //girl_item
        else if (e.target.value === 'girl_footwear'){
            this.props.itemTypeGirlFootWear();
        }else if (e.target.value === 'girl_clothe') { 
            this.props.itemTypeGirlClothe();
        } else if (e.target.value === 'girl_headwear') { 
            this.props.itemTypeGirlHeadWear();
        } else if (e.target.value === 'girl_underwear') {   
            this.props.itemTypeGirlUnderWear();
        } else if (e.target.value === 'girl_bag') { 
            this.props.itemTypeGirlBag();
        } else if (e.target.value === 'girl_tie') { 
            this.props.itemTypeGirlTie();
        } else if (e.target.value === 'girl_belt') { 
            this.props.itemTypeGirlBelt();
        } else if (e.target.value === 'girl_jewellery') { 
            this.props.itemTypeGirlJewellery();
        }
        //men_item
        else if (e.target.value === 'men_footwear'){
            this.props.itemTypeMenFootWear();
        }else if (e.target.value === 'men_clothe') { 
            this.props.itemTypeMenClothe();
        } else if (e.target.value === 'men_headwear') { 
            this.props.itemTypeMenHeadWear();
        } else if (e.target.value === 'men_underwear') {   
            this.props.itemTypeMenUnderWear();
        } else if (e.target.value === 'men_bag') { 
            this.props.itemTypeMenBag();
        } else if (e.target.value === 'men_tie') { 
            this.props.itemTypeMenTie();
        } else if (e.target.value === 'men_belt') { 
            this.props.itemTypeMenBelt();
        } else if (e.target.value === 'men_jewellery') { 
            this.props.itemTypeMenJewellery();
        }
        //women_item
        else if (e.target.value === 'women_footwear'){
            this.props.itemTypeWomenFootWear();
        }else if (e.target.value === 'women_clothe') { 
            this.props.itemTypeWomenClothe();
        } else if (e.target.value === 'women_headwear') { 
            this.props.itemTypeWomenHeadWear();
        } else if (e.target.value === 'women_underwear') {   
            this.props.itemTypeWomenUnderWear();
        } else if (e.target.value === 'women_bag') { 
            this.props.itemTypeWomenBag();
        } else if (e.target.value === 'women_tie') { 
            this.props.itemTypeWomenTie();
        } else if (e.target.value === 'women_belt') { 
            this.props.itemTypeWomenBelt();
        } else if (e.target.value === 'women_jewellery') { 
            this.props.itemTypeWomenJewellery();
        }
    };
    render(){
        return (
            <div className="page-admin-header page-admin-header--customer" >
                <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className= "text-input"
                            type="text" 
                            placeholder="Search"
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}                            
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className= "select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                        <select
                            className= "select"
                            value={this.props.filters.categoryType}
                            onChange={this.onCategorTypeChange}>
                            <option value="">Select Category</option>
                            <option value="boy">Boy</option>
                            <option value="girl">Girl</option>
                            <option value="amen">Men</option>
                            <option value="women">Women</option>
                        </select>          
                    </div>

                    <div className="input-group__item">
                        <select
                            className= "select"
                            value={this.props.filters.itemType}
                            onChange={this.onItemTypeChange}>
                            <option value="">Select Item</option>
                            {/*boy*/}
                            <option value="boy_bag">Boy Bag</option>
                            <option value="boy_belt">Boy Belt</option>
                            <option value="boy_clothe">Boy Clothe</option>
                            <option value="boy_footwear">Boy Footwear</option>
                            <option value="boy_headwear">Boy Headwear</option>
                            <option value="boy_jewellery">Boy Jewellery</option>
                            <option value="boy_tie">Boy Tie</option>
                            <option value="boy_underwear">Boy Underwear</option>
                            {/*girl*/}
                            <option value="girl_bag">Girl Bag</option>
                            <option value="girl_belt">Girl Belt</option>
                            <option value="girl_clothe">Girl Clothe</option>
                            <option value="girl_footwear">Girl Footwear</option>
                            <option value="girl_headwear">Girl Headwear</option>
                            <option value="girl_jewellery">Girl Jewellery</option>
                            <option value="girl_tie">Girl Tie</option>
                            <option value="girl_underwear">Girl Underwear</option>
                            {/*men*/}
                            <option value="men_bag">Men Bag</option>
                            <option value="men_belt">Men Belt</option>
                            <option value="men_clothe">Men Clothe</option>
                            <option value="men_footwear">Men Footwear</option>
                            <option value="men_headwear">Men Headwear</option>
                            <option value="men_jewellery">Men Jewellery</option>
                            <option value="men_tie">Men Tie</option>
                            <option value="men_underwear">Men Underwear</option>
                            {/*women*/}
                            <option value="women_bag">Women Bag</option>
                            <option value="women_belt">Women Belt</option>
                            <option value="women_clothe">Women Clothe</option>
                            <option value="women_footwear">Women Footwear</option>
                            <option value="women_headwear">Women Headwear</option>
                            <option value="women_jewellery">Women Jewellery</option>
                            <option value="women_tie">Women Tie</option>
                            <option value="women_underwear">Women Underwear</option>
                        </select>                
                    </div>
                    </div>   
                </div>
            </div>            
        );
    };
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),    
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    // setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    // setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    //category
    categoryTypeMen: () => dispatch(categoryTypeMen()),
    categoryTypeWomen: () => dispatch(categoryTypeWomen()),
    categoryTypeBoy: () => dispatch(categoryTypeBoy()),
    categoryTypeGirl: () => dispatch(categoryTypeGirl()),
    //item - Boy
    itemTypeBoyFootWear: () => dispatch(itemTypeBoyFootWear()),  
    itemTypeBoyClothe: () => dispatch(itemTypeBoyClothe()),
    itemTypeBoyHeadWear: () => dispatch(itemTypeBoyHeadWear()),
    itemTypeBoyUnderWear: () => dispatch(itemTypeBoyUnderWear()),
    itemTypeBoyBag: () => dispatch(itemTypeBoyBag()),
    itemTypeBoyTie: () => dispatch(itemTypeBoyTie()),
    itemTypeBoyBelt: () => dispatch(itemTypeBoyBelt()),
    itemTypeBoyJewellery: () => dispatch(itemTypeBoyJewellery()),
    //item - Girl
    itemTypeGirlFootWear: () => dispatch(itemTypeGirlFootWear()),  
    itemTypeGirlClothe: () => dispatch(itemTypeGirlClothe()),
    itemTypeGirlHeadWear: () => dispatch(itemTypeGirlHeadWear()),
    itemTypeGirlUnderWear: () => dispatch(itemTypeGirlUnderWear()),
    itemTypeGirlBag: () => dispatch(itemTypeGirlBag()),
    itemTypeGirlTie: () => dispatch(itemTypeGirlTie()),
    itemTypeGirlBelt: () => dispatch(itemTypeGirlBelt()),
    itemTypeGirlJewellery: () => dispatch(itemTypeGirlJewellery()),
    //item - Men
    itemTypeMenFootWear: () => dispatch(itemTypeMenFootWear()),  
    itemTypeMenClothe: () => dispatch(itemTypeMenClothe()),
    itemTypeMenHeadWear: () => dispatch(itemTypeMenHeadWear()),
    itemTypeMenUnderWear: () => dispatch(itemTypeMenUnderWear()),
    itemTypeMenBag: () => dispatch(itemTypeMenBag()),
    itemTypeMenTie: () => dispatch(itemTypeMenTie()),
    itemTypeMenBelt: () => dispatch(itemTypeMenBelt()),
    itemTypeMenJewellery: () => dispatch(itemTypeMenJewellery()),
    //item - Women
    itemTypeWomenFootWear: () => dispatch(itemTypeWomenFootWear()),  
    itemTypeWomenClothe: () => dispatch(itemTypeWomenClothe()),
    itemTypeWomenHeadWear: () => dispatch(itemTypeWomenHeadWear()),
    itemTypeWomenUnderWear: () => dispatch(itemTypeWomenUnderWear()),
    itemTypeWomenBag: () => dispatch(itemTypeWomenBag()),
    itemTypeWomenTie: () => dispatch(itemTypeWomenTie()),
    itemTypeWomenBelt: () => dispatch(itemTypeWomenBelt()),
    itemTypeWomenJewellery: () => dispatch(itemTypeWomenJewellery())
});

export default connect(mapStateToProps, mapDispatchToProps)(CustListFilters);