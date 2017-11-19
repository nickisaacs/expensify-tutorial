import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission' ,() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
       preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change',() => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    }); 
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change',() => {
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change',{
        target: {value}
    }); 
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if input is valid',() => {
    const value = '12.10';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    }); 
    expect(wrapper.state('amount')).toBe(value);
});

test('should set amount if input is valid',() => {
    const value = '12.100';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    }); 
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission',() =>{
    const onSubmitSpy = jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });

});


//below two dont work, as SingleDatePicker is wrapped with withStyles, and it does not get picked up by find
// test('should set new date on date change',() => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//     expect(wrapper.state('createdAt')).toEqual(now);
// });

// test('should set calendarfocus on change',() => {
//     const focused = true;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
//     expect(wrapper.state('calendarFocused')).toBe(focused);
// });