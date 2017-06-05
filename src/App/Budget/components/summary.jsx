import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { SUMMARY_TEXT } from './../constants';
import SummaryItem from './summaryItem.jsx';
import { formatCurrency } from './../../utils/';
export default class Summary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isHidden) return null;

        if (this.props.data.length === 0) return (
            <div className="budgetSummary">
                <div className="well">{SUMMARY_TEXT.NO_DATA}</div>
            </div>
        );

        const formattedTotal = formatCurrency(this.props.total);
        const renderItems = this.props.data.map((item, idx) => {
            return (
                    <SummaryItem
                        key={`summaryItem__${idx}`}
                        name={item.name}
                        incomeExpenseId={item.incomeExpenseId}
                        amount={item.amount}
                        desc={item.desc}
                        frequency={item.frequency}
                        dateTimeAdded={item.dateTimeAdded}
                        removeIncomeExpense={this.props.removeIncomeExpense}
                        total={this.props.total}
                        type={item.type} />
            );
        })

        return (<div className="budgetSummary">
            <div className="budgetSummary__itemHeader">
                <div className="budgetSummary__itemName">Name</div>
                <div className="budgetSummary__itemDescription">Description</div>
                <div className="budgetSummary__itemDate">Date</div>
                <div className="budgetSummary__itemAction">Action</div>
                <div className="budgetSummary__itemAmount">Amount</div>
            </div>
            <CSSTransitionGroup
                transitionName="budgetSummary__items"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={500}>
                {renderItems}
            </CSSTransitionGroup>
            <div className="budgetSummary__total">
                <div className="budgetSummary__totalText">Total</div>
                <div className="budgetSummary__totalAmount">{formattedTotal}</div>
                <div className="summaryMask" />
            </div>
        </div>);
    }
}

Summary.propTypes = {
    data: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    isHidden: PropTypes.bool,
    removeIncomeExpense: PropTypes.func.isRequired,
};

Summary.defaultProps = {
    isHidden: false,
};
