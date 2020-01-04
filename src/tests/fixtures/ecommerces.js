import moment from 'moment';

export default [{
    id: '1',
    description: 'men shoe', 
    category: 'amen', 
    item: 'men_footwear',
    amount: 12500,           
    image: 'shoe.jpeg', 
    imageUrl:'',
    stock: 100,
    createdAt: 0
}, { 
    id: '2',
    description: 'women shoe', 
    category: 'women', 
    item: 'women_headwear',
    amount: 4500,              
    image: 'women_shoe.jpeg', 
    imageUrl:'',
    stock: 403,  
    createdAt: moment(0).subtract(5, 'days').valueOf()
}, {  
    id: '3',
    description: 'boy shirt', 
    category: 'boy', 
    item: 'boy_clothe',  
    amount: 350, 
    image: 'shirt_boy.jpeg', 
    imageUrl:'',
    stock: 3200,
    createdAt: moment(0).add(5, 'days').valueOf()
}, {
    id: '4',
    description: 'girl head tie', 
    category: 'girl', 
    item: 'girl_headwear',
    amount: 2500, 
    image: 'girl_headtie.jpeg', 
    imageUrl:'',
    stock: 17850,
    createdAt: moment(0).add(2, 'days').valueOf()
}];
