import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import 'react-dates/lib/css/_datepicker.css';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill',amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description: 'Rent',amount: 109500}));

//store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

console.log(visibleExpenses);

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// },3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));