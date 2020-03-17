import moment from "moment";
export default (cartDB, { text, sortBy, cartdbId, startDate, endDate }) => {
    return cartDB.filter((cartdb) => {  //filter() allow us to return a subset of all of the array expenses.       
        const createdAtMoment = moment(cartdb.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = cartdb[0].description.toLowerCase().includes(text.toLowerCase());
        const cartdbIdMatch = cartdb.id.includes(cartdbId);
                
        return startDateMatch && endDateMatch && textMatch && cartdbIdMatch;
    }).sort((a, b) =>{    //compare function. sort() get called on a return subset array. if a < b return -1 else if a > b return 1  else a === b return 0
          if(sortBy === 'date') {
              return a.createdAt < b.createdAt ? 1 : -1;   // the truthy value is 1 which means b is more recent than a 
        }                                                  
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
      }
    });
};

