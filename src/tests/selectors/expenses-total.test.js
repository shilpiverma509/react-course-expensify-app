import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';


test('should return 0 if no expense provided',()=>{
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
})

test('should correctly add up a single expense',()=>{
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
})

test('should correctly add up multiple expenses',()=>{
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(24195);
})