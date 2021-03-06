
import {
  startSetExpenses,
  startAddExpense,addExpense,
  editExpense,removeExpense,
  setExpenses, 
  setStartExpenses,
   startRemoveExpense,
   startEditExpense
  } from '../../actions/expenses';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import {startLogin, startLogout} from '../../actions/auth';
import {firebase,googleAuthProvider} from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);
//set data on firebase
//adding done will make sure that beforeEach doesn't allow
//the test case to run until firebase has actually synced up the data
beforeEach((done)=>{
  const expensesData = {};
  expenses.forEach(({id,description,note,amount,createdAt})=>{
    expensesData[id]={description,amount,note,createdAt}
});
  database.ref('expenses').set(expensesData).then(()=>done());
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should startRemoveExpense and remove it from firebase',(done)=>{
  const store = createMockStore({});
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({id}))
  .then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot)=>{
    //if the item is removed snapshot.val() will be null
    expect(snapshot.val()).toBeFalsy();
    done();
  })
});




test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});
test('should setup start edit Expense action object',(done)=>{
  const store = createMockStore({});
  const id = expenses[1].id;
  const updates = {
    note:'removed'
  }
  store.dispatch(startEditExpense(id,updates)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`expenses/${id}`).once('value')
  }).then((snapshot)=>{
    expect(snapshot.val().note).toBe(updates.note);
    done();
  });
});

//default values
/*
test('should add expenses action object with default values',()=>{
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

*/


//provided values;
/*
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
*/
//test case after adding startAddExpense thunk
//as passing defaults is the responisibilty of startAddExpense now

test('should add expenses action object with prvided values',()=>{
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:expenses[2]
  })
});



//create a fake redux-store for testing purposes
/*make assertions about
  1.database should be successfully updated
  2.correct action to be dispatched
*/  
//done forces jest to waut until the asynchronous function of fetching data
//from database has returned
//we have to wait for firebase to return the updated data
//store.dispatch will return only after done() is called
test('should add expense to database and store',(done)=>{
    // Initialize mockstore with empty state or object
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
    // Test if your store dispatched the expected actions
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      //query the database and make sure the data was stored in the
      //right location
      //avoiding nesty callbacks using promise chaining
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
}); 

  //   return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  // .then((snapshot) => {
  //   expect(snapshot.val()).toEqual(expenseData);
  //   done();
  // });

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

test('should setup set expense action object with data',()=>{
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase',(done)=>{
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'SET_EXPENSES',
      expenses
    });
    done();
  })
});



// test('should set up startLogin action',()=>{
//   const store = createMockStore({});
//   const signInWithPopup=jest.fn();
//   store.dispatch(startLogin()).then(()=>{
//     const actions = store.getActions();
//     expect(actions[0])
//   })
// })



// test('should fetch the expenses from firebase',(done)=>{
//   const store = createMockStore({});
//   store.dispatch(setStartExpenses()).then(()=>{
//     const actions = store.getActions();
//     expect(actions).toEqual({
//       type:'SET_EXPENSES',
//       expenses
//     });
//     done();
//   })
// })