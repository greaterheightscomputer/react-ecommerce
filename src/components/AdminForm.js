import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

export default class AdminForm extends React.Component{    
    constructor(props) { //its will be use for both AddProduct and EditProduct
        super(props);

        this.state = {
            description: props.ecommerce ? props.ecommerce.description : '',
            category: props.ecommerce ? props.ecommerce.category : '',
            item: props.ecommerce ? props.ecommerce.item : '',
            amount: props.ecommerce ? (props.ecommerce.amount / 100).toString() : '',
            stock: props.ecommerce ? props.ecommerce.stock :'',       
            image: props.ecommerce ? props.ecommerce.image.name : '',
            imageUrl: props.ecommerce ? props.ecommerce.imageUrl : '',
            company: props.ecommerce ? props.ecommerce.company : '',
            info: props.ecommerce ? props.ecommerce.info: '',
            createdAt: props.ecommerce ? moment(props.ecommerce.createdAt) : moment(),
            focused: false,
            error: ''               
        }
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({ category }));
    };
    onItemChange = (e) => {
        const item = e.target.value;
        this.setState(() => ({ item }));
    };
    onStockChange = (e) => {
        const stock = e.target.value;        
        this.setState(() => ({ stock }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));        
        }        
    };
    onCompanyChange = (e) => {
        const company = e.target.value;
        this.setState(() => ({ company }));
    };
    onInfoChange = (e) => {
        const info = e.target.value;
        this.setState(() => ({ info }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));            
        }        
    };
    onFocusChange = ({ focused}) => {
        this.setState(() => ({ focused }));
    };
    onImageChange = (e) => {        
        let reader = new FileReader();
        let file = e.target.files[0];        
        reader.onloadend = () => {
            this.setState({
                image: file,
                imageUrl: reader.result
            });
        };
        reader.readAsDataURL(file); 
    };
    onSubmitClick = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.category || !this.state.item || !this.state.amount || !this.state.image || !this.state.stock || !this.state.company || !this.state.info) {        
            this.setState(() => ({
                error: 'Please provide value for the empty field(s)'
            }));    
        } else {
            this.setState(() => ({ error: '' }));            
            this.props.onSubmit({
                description: this.state.description,
                category: this.state.category,
                item: this.state.item,
                amount: parseFloat(this.state.amount, 10) * 100,
                stock: this.state.stock,
                image: this.state.image.name,
                imageUrl: this.state.imageUrl,
                company: this.state.company,
                info: this.state.info,
                createdAt: this.state.createdAt.valueOf()
            });            
        } 
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmitClick}>                
                    <input
                        className= "text-input"
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <select
                        className= "select"
                        value={this.state.category}
                        onChange={this.onCategoryChange}                        
                    >
                        <option value="">Select Category</option>
                        <option value="boy">Boy</option>
                        <option value="girl">Girl</option>
                        <option value="amen">Men</option>
                        <option value="women">Women</option>
                    </select>      
                    <select
                        className= "select"
                        value={this.state.item}
                        onChange={this.onItemChange}>
                        <option value="">Select Item</option>
                        {/*boyItems */}
                        <option value="boy_bag">Boy Bag</option>
                        <option value="boy_belt">Boy Belt</option>
                        <option value="boy_clothe">Boy Clothe</option>
                        <option value="boy_footwear">Boy Footwear</option>
                        <option value="boy_headwear">Boy Headwear</option>
                        <option value="boy_jewellery">Boy Jewellery</option>
                        <option value="boy_tie">Boy Tie</option>
                        <option value="boy_underwear">Boy Underwear</option>
                        {/*girlItems */}
                        <option value="girl_bag">Girl Bag</option>
                        <option value="girl_belt">Girl Belt</option>
                        <option value="girl_clothe">Girl Clothe</option>
                        <option value="girl_footwear">Girl Footwear</option>
                        <option value="girl_headwear">Girl Headwear</option>
                        <option value="girl_jewellery">Girl Jewellery</option>
                        <option value="girl_tie">Girl Tie</option>
                        <option value="girl_underwear">Girl Underwear</option>
                        {/*menItems */}
                        <option value="men_bag">Men Bag</option>
                        <option value="men_belt">Men Belt</option>
                        <option value="men_clothe">Men Clothe</option>
                        <option value="men_footwear">Men Footwear</option>
                        <option value="men_headwear">Men Headwear</option>
                        <option value="men_jewellery">Men Jewellery</option>
                        <option value="men_tie">Men Tie</option>
                        <option value="men_underwear">Men Underwear</option>
                        {/*womenItems */}
                        <option value="women_bag">Women Bag</option>
                        <option value="women_belt">Women Belt</option>
                        <option value="women_clothe">Women Clothe</option>
                        <option value="women_footwear">Women Footwear</option>
                        <option value="women_headwear">Women Headwear</option>
                        <option value="women_jewellery">Women Jewellery</option>
                        <option value="women_tie">Women Tie</option>
                        <option value="women_underwear">Women Underwear</option>
                    </select>    
                    <input
                        className= "text-input"
                        type="text"
                        placeholder="Amount"                        
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <input
                        className= "text-input"
                        type="number"
                        placeholder="Stock"                        
                        value={this.state.stock}
                        onChange={this.onStockChange}
                    />
                    <input
                        className= "text-input"
                        type="text"
                        placeholder="Company Name"                        
                        value={this.state.company}
                        onChange={this.onCompanyChange}
                    />
                    <input
                        className= "text-input"
                        type="text"
                        placeholder="Product Information"                        
                        value={this.state.info}
                        onChange={this.onInfoChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                   <div>
                        <input 
                            className= "text-input"
                            type="file"                            
                            onChange={this.onImageChange}
                        />
                        <div className="image-input">                            
                            <img src={this.state.imageUrl} height="200" width="200"/>                            
                        </div>                        
                    </div>
                <div>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                </div>
                <div>
                    <button className="button">Save Product</button>                         
                </div>                   
            </form>                            
        );
    };
}

