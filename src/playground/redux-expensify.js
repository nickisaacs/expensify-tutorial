import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Actions:
//add expense
const addExpense = (
    {   description ='', 
        note= '',
        amount =0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//remove expense
const removeExpense = (
    {id} = {}
)=> ({
    type:'REMOVE_EXPENSE',
    expense:{
        id
    }
});
//edit expense
const editExpense= (
    id, updates
) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


//set text filter
const setTextFilter= (text = '') =>({
    type: 'SET_TEXT',
    text
});
//sort by date
const sortByDate = () =>({
    type: 'SORT_BY_DATE'
});
//sort by amount
const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT'
});
//set start date
const setStartDate = (startDate) =>({
    type:'SET_START_DATE',
    startDate
});
//set end date
const setEndDate = (endDate) =>({
    type:'SET_END_DATE',
    endDate
});

//Expenses Reducer

const expensesReducerDefaultState = [];


//not using array.push as it modifies the variable
//concat creates a new array -> good
//but we now use spread operator (...)
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.expense.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense; //can be ignored as it does same thing if not present
                }
            });
        default:
            return state;
    }
};

//Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text:  action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

//get visible expense
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate ; 
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1;
        }
    });
};

//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

 const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: 124}));
 const expenseTwo = store.dispatch(addExpense({description: 'Cofee', amount: 3000, createdAt: 45000}));
// console.log(expenseOne);

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 230}));

//store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setEndDate(1300));

const demoState= {
    expenses: [{
        id: '1235',
        description:'Januray Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

