import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from './../../utils';

export default class SummaryItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const formattedAmount = formatCurrency(this.props.amount);

        return <div className={`budgetSummaryItem__item budgetSummaryItem__item-${this.props.type}`}>
            <div className="budgetSummaryItem__name">{this.props.name}</div>
            <div className="budgetSummaryItem__description">{this.props.desc}</div>
            <div className="budgetSummaryItem__action">
                <a href="#" onClick={this.props.removeIncomeExpense.bind(this, this.props.incomeExpenseId, this.props.amount, this.props.type, this.props.total)}>Remove</a>
            </div>
            <div className="budgetSummaryItem__amount">{formattedAmount}</div>
            {/*<div className="budgetSummaryItemMask" />*/}
        </div>;
    }
}

SummaryItem.propTypes = {
    incomeExpenseId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    removeIncomeExpense: PropTypes.func.isRequired,
    desc: PropTypes.string,
};
