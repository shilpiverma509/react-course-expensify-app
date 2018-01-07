/**
 * goal is to list the expenses on the dashboard page
 * how do we access the store information from react componets
 */

import React from 'react';
import ExpenseList from './ExpenseList';
import {connect} from 'react-redux';
import ExpenseListFilters from './ExpenseListFilters';
//conects your component to the redux store

const ExpenseDashboardPage =(props)=>(
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
    );

export default ExpenseDashboardPage;