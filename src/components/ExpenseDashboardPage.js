/**
 * goal is to list the expenses on the dashboard page
 * how do we access the store information from react componets
 */

import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
//conects your component to the redux store

const ExpenseDashboardPage =(props)=>(
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
    );

export default ExpenseDashboardPage;