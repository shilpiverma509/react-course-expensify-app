//import './utils.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './firebase/firebase';
import AppRouter from './routers/AppRouter'
import  './firebase/firebase';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/SelectExpenses';
import {setTextFilter} from './actions/filters';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//import './playground/promises';

const store = configureStore();

//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));


