
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';


test('should generate setstartDate action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})

test('should generate setEndDate action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})
test('should set text filter for default value',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('should set text filter for provided value',()=>{
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rent'
    })
})

test('should set sort by amount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
test('should set sort by date action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})
