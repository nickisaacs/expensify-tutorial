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
            return state.filter(({id})=> id !== action.id);
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
        case 'SET_EXPENSES':
            return action.expenses;
            
        default:
            return state;
    }
};

export default expensesReducer;