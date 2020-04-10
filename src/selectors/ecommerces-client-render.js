export default (ecommerces, { text, sortBy, itemType,  categoryType }) => {
    return ecommerces.filter((ecommerce) => {  //filter() allow us to return a subset of all of the array expenses.        
        const textMatch = ecommerce.description.toLowerCase().includes(text.toLowerCase());
        const categoryMatch = ecommerce.category.includes(categoryType);
        const itemMatch = ecommerce.item.includes(itemType);
        return textMatch && categoryMatch && itemMatch;        
    }).sort((a, b) =>{    //compare function. sort() get called on a return subset array. if a < b return -1 else if a > b return 1  else a === b return 0
          if(sortBy === 'date') {
              return a.createdAt < b.createdAt ? 1 : -1;   // the truthy value is 1 which means b is more recent than a 
        }                                                  
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
      }
    });
};
