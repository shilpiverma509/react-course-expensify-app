 import uuid from 'uuid';

 //ADD_EXPENSE generator
//installing uuid to generate id's now . 
/*
const addExpense = (expense = {}) => { ... } 
where expense is an object with des,note,amount and created at properties
expense={}-> if you call addExpense()without argument, then instead of
taling the parameters as undefined, it will take an empty object
*/

export const addExpense = (
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    } ={}
    )=>({
        type:'ADD_EXPENSE',
        expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt

    }
});
//REMOVE_EXPENSE

export const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
        id

})
//destructuring object
//EDIT_EXPENSE
//id and update will not need defaults, if you don't have an id 
//and you are not updating anything, there is no need to call it

export const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates  
})
