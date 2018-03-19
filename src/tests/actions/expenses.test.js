
import {addExpense,editExpense,removeExpense} from '../../actions/expenses';
import uuid from 'uuid';

test('should set up remove expense action object',()=>{
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  })
})

test ('should edit expenses action object',()=>{
  const action = editExpense('123abc',{note:"New note"});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      note:'New note'
    }
  })
})

//default values
test('should add expenses action object',()=>{
  const expenseData={
    description:'',
    note:'',
    amount:0,
    createdAt:0
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      ...expenseData,
      id:expect.any(String)
    }
  })
})

//provided values;
test('should add expenses action object',()=>{
  const action = addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      id:expect.any(String),
      description:'',
        note:'',
        amount:0,
        createdAt:0,
    }
  })
})