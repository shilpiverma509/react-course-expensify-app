import {AddExpensePage} from '../../components/AddExpensePage';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

//reusing spies and wrapper through all of iur test cases
let startAddExpense,history,wrapper;
beforeEach(()=>{
    startAddExpense = jest.fn();
     history = {push:jest.fn()}
     wrapper = shallow(
        <AddExpensePage 
        startAddExpense={startAddExpense} 
            history={history} 
        />);
})
test('should render AddExpensePage correctly',()=>{
    //addExpensePage takes onSubmit and history.push as props
    //creating spies

    // const onSubmit = jest.fn();
    // const history = {push:jest.fn()}
    // const wrapper = shallow(
    //     <AddExpensePage 
    //         onSubmit={onSubmit} 
    //         history={history} 
    //     />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit',()=>{
    // const onSubmit = jest.fn();
    // const history = {push:jest.fn()}
    // const wrapper = shallow(
    //     <AddExpensePage 
    //         onSubmit={onSubmit} 
    //         history={history} 
    //     />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);   
})