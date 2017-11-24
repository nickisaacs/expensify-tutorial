import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Should correctly render Expenses Summary with 1 expense',() => {
    const wrapper = shallow(<ExpensesSummary count={1} total={235}/>);
    expect(wrapper).toMatchSnapshot();

});

test('Should correctly render Expenses Summary with multiple expenses',() => {
    const wrapper = shallow(<ExpensesSummary count={6} total={23432325}/>);
    expect(wrapper).toMatchSnapshot();
});