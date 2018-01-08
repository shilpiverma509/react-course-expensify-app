//import './utils.js'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/SelectExpenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

//to check everything is correct
const store = configureStore();

store.dispatch(addExpense({description:'Water bill',amount:4500}));
store.dispatch(addExpense({description:'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:109500}));

// store.dispatch(setTextFilter('water'));
// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000);

    const state=store.getState();
    const visibleExpenses= getVisibleExpenses(state.expenses,state.filters);
    //console.log(store.getState());
    console.log(visibleExpenses);
/*Provider:It is going to allow us to provide the store to all of the components that make up our application 
    It takes a prop named as store and we have to pass it with the name of the store
*/
    
const jsx = (

    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));


