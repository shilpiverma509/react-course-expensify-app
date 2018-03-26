import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};


//for adding thunk we need to add composeEnhancers
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// //store creation
// export default ()=>{
//     const store = createStore(
//         combineReducers({
//             expenses:expensesReducer,
//             filters:filtersReducer
//         }),
//         composeEnhancers(applyMiddleware(thunk))
//         //  applyMiddleware(thunk)
//         //if we were not using redux dev tools we could have 
//         //added thunk using this single line 

//       //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// //for adding redux dev tools
//     );
//     return store;
// };