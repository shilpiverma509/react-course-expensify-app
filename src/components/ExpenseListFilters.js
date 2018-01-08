/*
* learn how to dispatch from store
* reading from and writing to redux store
 */
import React from 'react';
import ExpenseList from './ExpenseList';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';
import {connect} from 'react-redux';

const ExpenseListFilters =  (props)=>(
    <div>
        <input
         type="text" 
         value={props.filters.text} 
         onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value));
        }} />
        {/*<select 
            value={props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value==='date'){
                    props.dispatch(sortByDate());
                }else if(e.target.value==='amount'){
                    props.dispatch(sortByAmount());}
        }}> */}
        <select value={props.filters.sortBy} onChange={(e) => {
            (e.target.value === 'date')? props.dispatch(sortByDate()):props.dispatch(sortByAmount())
            }}>                   
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
           {/*
           currently we are not able to change the input text
            changing the redux store, we need to use dispatch 
            in order to update the store.
            connecting a componet to redux, we have the dispatch props along
            with filters props.This means we can access dispatch to
            dispatch actions. We have access to the parent component props along
            side dispatch from connect
           */ }
        
    </div>
);

const mapStateToProps = (state)=>{
    return{
        filters:state.filters
    }
    
};


export default connect(mapStateToProps)(ExpenseListFilters) ;