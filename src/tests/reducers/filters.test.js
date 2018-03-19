import filtersReducer from '../../reducers/filters';
import moment from 'moment';
//for default cases

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined,{
        type:'@@INIT'
    });
    expect(state).toEqual({
        text:'',
        sortBy:'date', 
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
});

})

test('should setup sort by to amount',()=>{
    const state = filtersReducer(undefined,{
        type:'SORT_BY_AMOUNT'
    })
    expect(state.sortBy).toBe('amount');
})

test('should setup by sort by to date',()=>{
        const currentState={
            text:'',
            startDate:undefined,
            endDate:undefined,
            sortBy:'amount'
        };
        const action = {type:'SORT_BY_DATE'}
        const state= filtersReducer(currentState,action);
        expect(state.sortBy).toBe('date');
    })

    test('should set text filter',()=>{
       const text = 're'
        const action = {
            type:'SET_TEXT_FILTER',
            text
        }
        const state= filtersReducer(undefined,action);
        expect(state.text).toBe(text);
    })

    test('should set StartDate filter',()=>{
        const action={
            type:'SET_START_DATE',
            startDate:moment()
        }
        const state = filtersReducer(undefined,action);
        expect(state.startDate).toBe(action.startDate);
    })
    test('should set endtDate filter',()=>{
        const action={
            type:'SET_END_DATE',
            endDate:moment()
        }
        const state = filtersReducer(undefined,action);
        expect(state.endDate).toBe(action.endDate);
    })