import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',() => {
    const state = expensesReducer(undefined, { type:'@@INIT' } );
    expect(state).toEqual([]);

});

test('should remove expense by id',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should  not remove expense if id not found',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 5
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 7,
        note: 'testing',
        description: 'this is an expense',
        amount: 4534,
        createdAt: 88
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit expense by id',() => {
    const updates = {
        note: 'updated!',
        amount: 2000
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],{...expenses[1],...updates},expenses[2]]);

});

test('should not edit expense if ID not found',() => {
    const updates = {
        note: 'updated!',
        amount: 2000
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: 27,
        updates
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);

});