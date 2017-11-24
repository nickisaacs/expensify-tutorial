import React from 'react';
import {connect} from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({total,count}) =>(
    <div>
        <h1>Viewing {count} {count === 1 ? 'expense' : 'expenses'} totalling  {numeral(total/100).format('$0,0.0')}</h1>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    return {
        total : getTotalExpenses(visibleExpenses),
        count: visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);


