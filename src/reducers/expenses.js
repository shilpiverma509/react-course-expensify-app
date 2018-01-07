//EXPENSES REDUCER
/*
    Reducers are responsible for managing all of states
    Reducers have two parameteres (state,action)
    State return the default state and action returns object property
    Reducer is a pure function and always return an object
*/ 
const expensesReducerDefaultState=[];
export default (state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        // case 'REMOVE_EXPENSE':
        // return state.filter(({id})=>id!==action.id);
        case 'REMOVE_EXPENSE':
        return state.filter((expense)=>{
            return expense.id!==action.id
        });
        case 'EDIT_EXPENSE':
        //matching the id with action id
        return state.map((expense)=>{
            if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.updates
                };
            }else{
                return expense;
            }
            
        });
        
        default:
        return state;
    }
}
