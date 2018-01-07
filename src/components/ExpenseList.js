//stateless

import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/SelectExpenses';

//Regular unconnected componnet
/**
 * We are taking an array of object(expense) andr returning 
 * instances of ExpenseListItem component
 */
const ExpenseList = (props)=>(
    <div>
        <h1>ExpenseList</h1>            
        {props.expenses.map((expense)=>{
              return <ExpenseListItem key={expense.id} {...expense}/>  
            })};
    </div>
);
//maps the store's state to compponet props
const mapStateToProps = (state)=>{
    return{
        expenses:SelectExpenses(state.expenses,state.filters)
        //expenses:state.expenses
       // filters:state.filters {it doesn't need filters}
    };
};
/*call to connect
reading from the store
connect(()=>{}) here we pass theinformation of what we want to connect
This practice of making a const and exporting it as default is not 
a common practice 
const ConnectedExpenseList = connect((state)=>{
    return {
        expenses:state.expenses
    };
})(ExpenseList);  
*/  
export default connect (mapStateToProps)(ExpenseList);

//export default ConnectedExpenseList;  

/*mapStateToProps is basically used to make the new componet subscribe
to Redux Store Updates
This means that any time the store is updated , this function wil be called
mapStateToProps result in a plain object , which will  be merged into
the components props
*/

