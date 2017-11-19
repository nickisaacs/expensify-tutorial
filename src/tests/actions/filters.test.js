import {setStartDate,setEndDate,sortByAmount,sortByDate,setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should generate setStartDate action object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });

});  

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate setText action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});;

test('should generate setText action object with custom values', () => {
    const text = 'something';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT',
        text
    });
});;