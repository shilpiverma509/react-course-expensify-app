import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense} from '../actions/expenses';
import {removeExpense} from '../actions/expenses';

//Refactor editExpensePAge to class based from classless
//Setup mapDispatchToProps editExpense and removeExpense

export class EditExpensePage extends React.Component{
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onRemove = ()=>{
    this.props.removeExpense({id:this.props.expense.id})
    this.props.history.push('/');
    }
  render(){
    //debugger;
    return (
      <div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button onClick={this.onRemove}>
        Remove
        </button>
    </div>
    )
  }
}

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//         }}
//       />
//       <button onClick={()=>{
//         props.dispatch(removeExpense({id:props.expense.id}))
//         props.history.push('/');
//         }}>
//         Remove
//         </button>
//     </div>
//   );
//};



const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};
const mapDispatchToProps = (dispatch,props)=>({
  editExpense:(id,expense)=>dispatch(editExpense(id, expense)),
  removeExpense:(data)=>dispatch(removeExpense(data))
});


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
