import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { formatCurrency } from './../../utils';
import DropDownButton from './../../Global/ui/dropDownButton.jsx';

export default class SummaryItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const formattedAmount = formatCurrency(this.props.amount);
        const formattedDate = moment(this.props.date).format('MM/DD/YY H:mm');

        return <div className={`budgetSummaryItem__item budgetSummaryItem__item-${this.props.type}`}>
            <div className="budgetSummaryItem__name">{this.props.name}</div>
            <div className="budgetSummaryItem__description">{this.props.desc}</div>
            <div className="budgetSummaryItem__date">{formattedDate}</div>
            <div className="budgetSummaryItem__action">
                <a href="#" onClick={this.props.removeIncomeExpense.bind(this, this.props.incomeExpenseId, this.props.amount, this.props.type, this.props.total, this.props.totalExpenses)}>Remove</a>
            </div>
            <div className="budgetSummaryItem__amount">{formattedAmount}</div>
            {/*<div className="budgetSummaryItemMask" />*/}
        </div>;
    }
}

SummaryItem.propTypes = {
    incomeExpenseId: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,    
    totalExpenses: PropTypes.number.isRequired,
    dateTimeAdded: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    removeIncomeExpense: PropTypes.func.isRequired,
    desc: PropTypes.string,
};
