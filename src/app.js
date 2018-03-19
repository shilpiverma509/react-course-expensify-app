//import './utils.js'
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import  './firebase/firebase';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/SelectExpenses';
import {setTextFilter} from './actions/filters';

const store = configureStore();

store.dispatch(addExpense({description:"water bill",amount:4500}));
store.dispatch(addExpense({description:"gas bill",amount:800,createdAt:1000}));
store.dispatch(addExpense({description:"rent",amount:109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));


