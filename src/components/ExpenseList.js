import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/SelectExpenses';

//using it named export for snapshot testing
export const ExpenseList = (props)=>
(
    <div>
    {
        props.expenses.length ===0?(
            <p>No expenses</p>
        ):(
            props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        )
    }
        
    </div>
);
const mapStateToProps = (state)=>{
    return {
        expenses:SelectExpenses(state.expenses,state.filters)
    };
}


export default connect(mapStateToProps)(ExpenseList);
   