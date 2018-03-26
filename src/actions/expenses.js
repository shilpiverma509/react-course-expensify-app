 import uuid from 'uuid';
 import database from '../firebase/firebase';

 //component calls action generator
 //action generator return object
 //component dispatches object
 //redux store runs reducer and store changes

 //changing to 
  //component calls action generator
  //action generator return function
  //component dispatched function (?) 
  //function runs (has ability to dispatch other actions and 
//do whatever it wants)

//for firebase
//use push
//attach callback
//dispatch action
//redirect

// export const addExpense = (
//     {
//         description='',
//         note='',
//         amount=0,
//         createdAt=0
//     } ={}
//     )=>({
//         type:'ADD_EXPENSE',
//         expense:{
//         id:uuid(),
//         description,
//         note,
//         amount,
//         createdAt

//     }
// });
//refactoring addExpense with firebase
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });
  
  export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense = { description, note, amount, createdAt };
  
      database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
    };
  };
  
  
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

 //ADD_EXPENSE generator
//installing uuid to generate id's now . 
/*
const addExpense = (expense = {}) => { ... } 
where expense is an object with des,note,amount and created at properties
expense={}-> if you call addExpense()without argument, then instead of
taling the parameters as undefined, it will take an empty object
*/