import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import  moment from 'moment';


test('should set default state',()=>{
    const state = expensesReducer(undefined,{
        type:'@@INIT'
    });
    expect(state).toEqual([]);
})

test('should remove expense by ID',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
})
test('should not remove expenses if id not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})
test('should add an expense',()=>{
    const expense = 
        {
            id:'4',
            description:'Gym',
            note:'',
            amount:12500,
            createdAt:moment(0).subtract(5,'days').valueOf()
        }
    
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
})

test('should edit an expense',()=>{
    const note='paid';
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            note
        } 
    }
    const state = expensesReducer(expenses,action)
    expect(state[1].note).toBe(note);
});

test('should not edit an expense if expense not found',()=>{
    const note="paid"
    const action = {
        type: 'EDIT_EXPENSE',
        id:'-1',
        updates:{
            note
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
});
