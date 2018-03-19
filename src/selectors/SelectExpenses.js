//Get visible expenses
//const getVisibleExpenses=(expenses,filters)=>{
    //destructuring the filters
    //timestamps(milliseconds)
    // 0->Jan 1st(midnight) 1970 (unix epoch)
    //33400,10,-283
    import moment from 'moment';
   export default  (expenses,{text,sortBy,startDate,endDate})=>{
        return expenses.filter((expense)=>{
            const createdAtMoment= moment(expense.createdAt);
            const startDateMatch = startDate?startDate.isSameOrBefore(createdAtMoment,'day'):true;
            const endDateMatch = endDate?endDate.isSameOrAfter(createdAtMoment,'day'):true;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            if(sortBy==='date'){
                return a.createdAt <b.createdAt?1 : -1
            }else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
              }
        });
    
    };