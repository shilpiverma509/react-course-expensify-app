import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpensePage} from '../../components/EditExpensePage';


let editExpense,removeExpense,history,wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    //history is an object with push property on it
     history = {push:jest.fn()}
     wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense = {removeExpense}
            history={history}
            expenses = {expenses[2]} 
        />);
});


test('should render EditExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle Edit Expense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
    console.log(wrapper.debug());

});

test('should handle remove Expense',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
});


