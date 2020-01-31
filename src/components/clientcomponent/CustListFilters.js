import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, categoryTypeMen, categoryTypeWomen, categoryTypeBoy, categoryTypeGirl, 
         itemTypeBoyFootWear, itemTypeBoyClothe, itemTypeBoyHeadWear, itemTypeBoyUnderWear, itemTypeBoyBag, itemTypeBoyTie, itemTypeBoyBelt, itemTypeBoyJewellery, 
         itemTypeWomenFootWear, itemTypeWomenClothe, itemTypeWomenHeadWear, itemTypeWomenUnderWear, itemTypeWomenBag, itemTypeWomenTie, itemTypeWomenBelt, itemTypeWomenJewellery,
         itemTypeMenFootWear, itemTypeMenClothe, itemTypeMenHeadWear, itemTypeMenUnderWear, itemTypeMenBag, itemTypeMenTie, itemTypeMenBelt, itemTypeMenJewellery,
         itemTypeGirlFootWear, itemTypeGirlClothe, itemTypeGirlHeadWear, itemTypeGirlUnderWear, itemTypeGirlBag, itemTypeGirlTie, itemTypeGirlBelt, itemTypeGirlJewellery             
        } from '../../actions/filters';

class CustListFilters extends React.Component {    
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
                            onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }}
                        />
                    </div>

                    <div className="input-group__item">
                        <select
                            className= "select"
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate());
                                } else if (e.target.value === 'amount') {
                                    this.props.dispatch(sortByAmount());
                                }
                            }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                        <select
                            className= "select"
                            value={this.props.filters.categoryType}
                            onChange={(e) => {
                                if (e.target.value === 'amen') {
                                    this.props.dispatch(categoryTypeMen());  
                                } else if (e.target.value === 'women') {
                                    this.props.dispatch(categoryTypeWomen());
                                } else if (e.target.value === 'boy') {
                                    this.props.dispatch(categoryTypeBoy());
                                } else if (e.target.value === 'girl') {
                                    this.props.dispatch(categoryTypeGirl());
                                }
                            }}>
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
                            onChange={(e) => {
                                //boy_item
                                if (e.target.value === 'boy_footwear') { 
                                    this.props.dispatch(itemTypeBoyFootWear());  
                                } else if (e.target.value === 'boy_clothe') { 
                                    this.props.dispatch(itemTypeBoyClothe());
                                } else if (e.target.value === 'boy_headwear') { 
                                    this.props.dispatch(itemTypeBoyHeadWear());
                                } else if (e.target.value === 'boy_underwear') {   
                                    this.props.dispatch(itemTypeBoyUnderWear());
                                } else if (e.target.value === 'boy_bag') { 
                                    this.props.dispatch(itemTypeBoyBag());
                                } else if (e.target.value === 'boy_tie') { 
                                    this.props.dispatch(itemTypeBoyTie());
                                } else if (e.target.value === 'boy_belt') { 
                                    this.props.dispatch(itemTypeBoyBelt());
                                } else if (e.target.value === 'boy_jewellery') { 
                                    this.props.dispatch(itemTypeBoyJewellery());
                                }
                                //girl_item
                                else if (e.target.value === 'girl_footwear'){
                                    this.props.dispatch(itemTypeGirlFootWear());
                                }else if (e.target.value === 'girl_clothe') { 
                                    this.props.dispatch(itemTypeGirlClothe());
                                } else if (e.target.value === 'girl_headwear') { 
                                    this.props.dispatch(itemTypeGirlHeadWear());
                                } else if (e.target.value === 'girl_underwear') {   
                                    this.props.dispatch(itemTypeGirlUnderWear());
                                } else if (e.target.value === 'girl_bag') { 
                                    this.props.dispatch(itemTypeGirlBag());
                                } else if (e.target.value === 'girl_tie') { 
                                    this.props.dispatch(itemTypeGirlTie());
                                } else if (e.target.value === 'girl_belt') { 
                                    this.props.dispatch(itemTypeGirlBelt());
                                } else if (e.target.value === 'girl_jewellery') { 
                                    this.props.dispatch(itemTypeGirlJewellery());
                                }
                                //men_item
                                else if (e.target.value === 'men_footwear'){
                                    this.props.dispatch(itemTypeMenFootWear());
                                }else if (e.target.value === 'men_clothe') { 
                                    this.props.dispatch(itemTypeMenClothe());
                                } else if (e.target.value === 'men_headwear') { 
                                    this.props.dispatch(itemTypeMenHeadWear());
                                } else if (e.target.value === 'men_underwear') {   
                                    this.props.dispatch(itemTypeMenUnderWear());
                                } else if (e.target.value === 'men_bag') { 
                                    this.props.dispatch(itemTypeMenBag());
                                } else if (e.target.value === 'men_tie') { 
                                    this.props.dispatch(itemTypeMenTie());
                                } else if (e.target.value === 'men_belt') { 
                                    this.props.dispatch(itemTypeMenBelt());
                                } else if (e.target.value === 'men_jewellery') { 
                                    this.props.dispatch(itemTypeMenJewellery());
                                }
                                //women_item
                                else if (e.target.value === 'women_footwear'){
                                    this.props.dispatch(itemTypeWomenFootWear());
                                }else if (e.target.value === 'women_clothe') { 
                                    this.props.dispatch(itemTypeWomenClothe());
                                } else if (e.target.value === 'women_headwear') { 
                                    this.props.dispatch(itemTypeWomenHeadWear());
                                } else if (e.target.value === 'women_underwear') {   
                                    this.props.dispatch(itemTypeWomenUnderWear());
                                } else if (e.target.value === 'women_bag') { 
                                    this.props.dispatch(itemTypeWomenBag());
                                } else if (e.target.value === 'women_tie') { 
                                    this.props.dispatch(itemTypeWomenTie());
                                } else if (e.target.value === 'women_belt') { 
                                    this.props.dispatch(itemTypeWomenBelt());
                                } else if (e.target.value === 'women_jewellery') { 
                                    this.props.dispatch(itemTypeWomenJewellery());
                                }
                            }}>
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
                            <option value="wommen_bag">Women Bag</option>
                            <option value="wommen_belt">Women Belt</option>
                            <option value="wommen_clothe">Women Clothe</option>
                            <option value="wommen_footwear">Women Footwear</option>
                            <option value="wommen_headwear">Women Headwear</option>
                            <option value="wommen_jewellery">Women Jewellery</option>
                            <option value="wommen_tie">Women Tie</option>
                            <option value="wommen_underwear">Women Underwear</option>
                        </select>                
                    </div>
                    </div>   
                </div>
            </div>            
        );
    };
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(CustListFilters);