import getTotalExpense from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses',() =>{
    const total = getTotalExpense([]);
    expect(total).toBe(0);
});

test('should correctly add a single expense',()=>{
    const total = getTotalExpense([expenses[0]]);
    expect(total).toBe(195);
});

test('should correctly add multiple expenses',()=>{
    const total = getTotalExpense(expenses);
    expect(total).toBe(114195);
});