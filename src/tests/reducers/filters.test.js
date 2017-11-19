import filtersReducer from '../../reducers/filters';
import moment from 'moment';

//to test default reducer values
test('should setup default filter values', () => {
    const state  = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('should set sortBy to amount',() =>{
    const state =  filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {type:'SORT_BY_DATE'};
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});

//should set text filter

test('should set text filer',() =>{
    const text = 'hello';
    const action = {type: 'SET_TEXT',text}
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe(text); 
});

//should set startDate and endDate

test('should set start date', () => {
    const action= {type: 'SET_START_DATE',startDate: moment(0)};
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set end date', () => {
    const action= {type: 'SET_END_DATE',endDate: moment(0)};
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toEqual(moment(0));
});