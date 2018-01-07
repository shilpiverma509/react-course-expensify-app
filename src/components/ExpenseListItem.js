import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';


//destructuring props object
/**
 * const ExpenseListItem = (props)=>{
 * <div>
 *  {props.description}{props.amount}
 * </div>
 * }
 * props here is the individual expense array
 * remove button will dispatch an action when it will get clicked

const ExpenseListItem = (props)=>{
    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} -{props.createdAt}</p>
        <button onClick={()=>{
           props.dispatch(removeExpense({id:props.id}));
        }}>Remove</button>
        
    </div>
} 
* The problem is with {props.id} 
* you can't use ES6 enhanced object literal syntax with object properties. 
* You'd need to do:{id:props.id}
*/
const ExpenseListItem = ({dispatch,id,amount,createdAt,description})=>(
    <div>
        <h3>{description}</h3>
        <p>{amount} -{createdAt}</p>
        <button onClick={()=>{
           dispatch(removeExpense({id}));
        }}>Remove</button>
        
    </div>
);
/*we don't need anything from the states.
The connect() gives ExpenseListItem access to the dispatch prop
which is all it needs.
So here the props came from the ExpenseList,then the Action modifier
was called. and that removes the expenses from the state 
*/
// const mapStatetoProps=(state)=>{
//     return{
//         expenses:state.expenses
//     }
// }

export default connect()(ExpenseListItem);