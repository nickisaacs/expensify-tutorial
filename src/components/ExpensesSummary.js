import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getTotalExpenses from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({total,count}) =>(
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{count}</span> {count === 1 ? 'expense' : 'expenses'} totalling  <span>{numeral(total/100).format('$0,0.0')}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
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


