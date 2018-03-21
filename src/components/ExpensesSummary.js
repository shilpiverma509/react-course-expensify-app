import React from 'react';
import SelectExpenses from '../selectors/SelectExpenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary= (props)=>{
    const expenseWord = props.expenseCount ===1?'expense':'expenses'
    return (
    <div>
            <p>Viewing {props.expenseCount} {expenseWord} totalling {numeral(props.expensesTotal/100).format('$0,0.00')}</p>
    </div>
    )
    
};
const mapStateToProps = (state)=>{
    const visibleExpenses =SelectExpenses(state.expenses,state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal:selectExpensesTotal(visibleExpenses)
    }
}

export default connect (mapStateToProps)(ExpensesSummary);