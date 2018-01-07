import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE generator
//installing uuid to generate id's now . 
/*
const addExpense = (expense = {}) => { ... } 
where expense is an object with des,note,amount and created at properties
expense={}-> if you call addExpense()without argument, then instead of
taling the parameters as undefined, it will take an empty object
*/
const addExpense =(
    {
    description='',
    note='',
    amount=0,
    createdAt=0
}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt   

    }
}
)
//REMOVE_EXPENSE
//destructuring object
const removeExpense = ({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})


//EDIT_EXPENSE
//id and update will not need defaults, if you don't have an id 
//and you are not updating anything, there is no need to call it
const editExpense = (id,updates)=>{
    type:'EDIT_EXPENSE',
    id,
    updates
}


//SET_TEXT_FILTER
const setTextFilter=(text='')=>{
    type:'SET_TEXT_FILTER',
    text
}


//SORT_BY_AMOUNT
const sortByAmount = ()=>{
    type: 'SORT_BY_AMOUNT'
}
//SORT_BY_DATE
const sortByDate = ()=>{
    type: 'SORT_BY_DATE'
}
//SET_START_DATE
//SET_END_DATE

//EXPENSES REDUCER
/*
    Reducers are responsible for managing all of states
    Reducers have two parameteres (state,action)
    State return the default state and action returns object property
    Reducer is a pure function and always return an object
*/ 
//default state of expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ]
        case 'REMOVE_EXPENSE':
        //return state.filter((expense)=>{ destructuring expense
        //expense is an individual array in expenses array
            return state.filter(({id})=>id!==action.id);
            case 'EDIT_EXPENSE':
            return state.map((expense) => {
              if (expense.id === action.id) {
                return {
                  ...expense,
                  ...action.updates
                };
              } else {
                return expense;
              };
            });
        default:
            return state;
    }
}
//FILTERS REDUCER
const filtersReducerDefaultState= {
    text:'',
    sortBy:'date', 
    startDate:undefined,
    endDate:undefined
}
const filtersReducer = (state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return{
            ...state,//current filter object
            text:action.text
        };
        case 'SORT_BY_AMOUNT':
        return{
            ...state,
            sortBy:amount
        }
        case 'SORT_BY_DATE':
        return{
            ...state,
            sortBy:date
        }
        default:
        return state;
    }
}



//Get visible expenses
//const getVisibleExpenses=(expenses,filters)=>{
    //destructuring the filters
    //timestamps(milliseconds)
    // 0->Jan 1st(midnight) 1970 (unix epoch)
    //33400,10,-283


//store creation
const store = createStore(
    combineReducers({
       expenses:expensesReducer,
       filters:filtersReducer
    })
);
console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
})
    
 const expense1= store.dispatch(addExpense({description:'Rent',amount:500,createdAt:-21000}));
 const expense2=store.dispatch(addExpense({description:'Coffee',amount:800,createdAt:-1000}));
console.log(expense1);
store.dispatch(removeExpense({id:expense1.expense.id}));
store.dispatch(editExpense(expense2.expense.id,{amount:900}));

store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

 //store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());

 //store.dispatch(setStartDate(0)); 
// store.dispatch(setStartDate());//start date undefined

 //store.dispatch(setEndDate(100));
// store.dispatch(setEndDate());
//console.log(expense1);

const demoState = {
    expenses:[{
     id:'anchdkd',
     description:'Jan Rent',
     note:"This was the final payment for that address",
     amount:54500,
     createdAt:0   
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }
};
//object destructuring
//after installing transform-object-rest-spread
// const user = {
//     name:"Jen",
//     age:24
// };
// //adding location and overriding age
// console.log({
//     ...user,
//     location:"Austin",
//     age:27
// })

