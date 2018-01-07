import {createStore, combineReducers} from 'redux';


//action generators : They are functions that return action objects

//argument destructuring of {argumentBy:5}and setting up default values
//const incrementCount = ({incrementBy=1}={})=>({
   // type:'INCREMENT',
    //incrementBy:typeof incrementBy==='number'?incrementBy:1
//});  

    //as we have set a default value of incrementBy hence removing it

    //as the object property name is same as property name
    //incrementBy:incrementBy
//     incrementBy
// })
    //implcit return of an object
    // return{
    //     type:'INCREMENT',

    // };
const incrementCount = ({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});
const resetCount = ({}={})=>({
    type:'RESET'

});
const setCount=({count}={})=>({
    type:'SET',
    count
});


//

//Reducers

//

const countReducer = (state = {count:0},action)=>{
    switch (action.type){
        case 'INCREMENT':
        //check if incrementBy has a value
        //const incrementBy = typeof action.incrementBy==='number'?action.incrementBy:1;
        return {
            count:state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count:state.count - action.decrementBy
        }
        case 'RESET':
        return {
            count:0
        }
        case 'SET':
        return{
            count:action.count
        }
        default: 
        return state;
    }
};

const store = createStore(countReducer);
const unsubscribe =store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(setCount({count:101}));


// const store = createStore((state = {count:0},action)=>{
//     switch (action.type){
//         case 'INCREMENT':
//         //check if incrementBy has a value
//         //const incrementBy = typeof action.incrementBy==='number'?action.incrementBy:1;
//         return {
//             count:state.count + action.incrementBy
//         };
//         case 'DECREMENT':
//         return {
//             count:state.count - action.decrementBy
//         }
//         case 'RESET':
//         return {
//             count:0
//         }
//         case 'SET':
//         return{
//             count:action.count
//         }
//         default: 
//         return state;
//     }
// });



//action - Increment the count
// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// });


