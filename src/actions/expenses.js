
import uuid from 'uuid';
//action generators for expenses
//ADD_EXPENSE generator
//installing uuid to generate id's now . 


export const addExpense = (
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={} //setting default value of id as {}
)=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        amount,
        note,
        createdAt

    }
})
//REMOVE_EXPENSE
//destructuring object
export const removeExpense = ({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE
//id and update will not need defaults, if you don't have an id 
//and you are not updating anything, there is no need to call it
export const editExpense = (id,updates)=>({
   type:'EDIT_EXPENSE',
   id,
   updates
   
})