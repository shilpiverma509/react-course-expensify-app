import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
import EditExpensePage from '../components/EditExpensePage';
//ADD_EXPENSE generator
//installing uuid to generate id's now . 
/*
const addExpense = (expense = {}) => { ... } 
where expense is an object with des,note,amount and created at properties
expense={}-> if you call addExpense()without argument, then instead of
taling the parameters as undefined, it will take an empty object
*/

const addExpense = (
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

const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
        id

})
//destructuring object
//EDIT_EXPENSE
//id and update will not need defaults, if you don't have an id 
//and you are not updating anything, there is no need to call it

const EditExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates  
})

//SET_TEXT_FILTER
const setTextFilter = (text="")=>
({
    type:'SET_TEXT_FILTER',
    text
})


//SORT_BY_AMOUNT
const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
})

//SORT_BY_DATE
const sortByDate = ()=>({
    type:'SORT_BY_DATE'
})
//SET_START_DATE
const setStartDate = (date)=>
({
    type:'SET_START_DATE',
    startDate:date

})
//SET_END_DATE
const setEndDate = (date)=>({
    type:'SET_END_DATE',
    endDate:date
})
//EXPENSES REDUCER
/*
    Reducers are responsible for managing all of states
    Reducers have two parameteres (state,action)
    State return the default state and action returns object property
    Reducer is a pure function and always return an object
*/ 
//default state of expenses Reducer
const expensesReducerDefaultState=[];

const expensesReducer = (state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
        console.log(state);
        return [...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
        //return state.filter((expense)=> expense.id!==action.id)
        return state.filter(({id})=>id!==action.id);
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.updates
                }
            }else{
                return expense
            }
        });
        
         default:
         return state;
    }
};
//FILTERS REDUCER
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date', 
    startDate:undefined,
    endDate:undefined
}

const filtersReducer = (state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        }
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy:'amount'
        }
         case 'SORT_BY_DATE':
         return {
             ...state,
             sortBy:'date'
         }
         case 'SET_START_DATE':
         return {
             ...state,
             startDate:action.startDate
         }
         case 'SET_END_DATE':
         return{
             ...state,
             endDate:action.endDate
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
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >=startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createdAt<=endDate;
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

//store creation
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})
 const expense1=store.dispatch(addExpense({description:"rent",amount:800,createdAt:-21000}));
 const expense2=store.dispatch(addExpense({description:"coffee",amount:300,createdAt:-1000}));
// store.dispatch(removeExpense({id:expense1.expense.id}));
// store.dispatch(EditExpense(expense2.expense.id,{amount:500}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('Coffee'));
 store.dispatch(sortByAmount());
// store.dispatch(setStartDate(0)); 
// store.dispatch(setStartDate());//start date undefined
// store.dispatch(setEndDate(1000));

//console.log(expense1);



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

