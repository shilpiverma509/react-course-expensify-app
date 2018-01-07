//Get visible expenses
//const getVisibleExpenses=(expenses,filters)=>{
    //destructuring the filters
    //timestamps(milliseconds)
    // 0->Jan 1st(midnight) 1970 (unix epoch)
    //33400,10,-283
    export default(expenses,{text,sortBy,startDate,endDate})=>{

        return expenses.filter((expense)=>{
            const startDateMatch = typeof startDate !=='number' ||expense.createdAt>=startDate;
            const endDateMatch = typeof endDate !=='number' || expense.createdAt<=endDate;
        //if expenses.description has the text variable string inside of it
        //includes
        //convert both strings to lower case (case-insensitive search)
        expense.description.toLowerCase();
            const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());
            //return the array only if all these are true
            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            if(sortBy==='date'){
                return a.createdAt <b.createdAt?1 : -1
            }else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
              }
        });
    
    };
    