import {createStore,combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default ()=>{
    const store = createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filtersReducer
        })
    );
    return store;
}
//store creation
//when we import the function the default export
// from configure store, we just call it, we get the
//store back and we can go ahead and actually use
//it

