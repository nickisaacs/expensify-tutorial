import { createStore } from 'redux';


//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. Reducers are pure functions (output is determined only by input and not external variables)

//eg for impure: let a = 10;
//               const add = (b) => a + b 

//2.Never change state or action

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;

    }

};

const store = createStore(countReducer);

//return type of subscribe gives a function to unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//store.dispatch({
//    type: 'INCREMENT',
//    incrementBy: 5
//});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//to stop receiving updates from the store.
//unsubscribe();

store.dispatch(resetCount());


store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());


store.dispatch(setCount({ count: 30 }));