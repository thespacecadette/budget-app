import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

        return (<div className="budgetSummary">
            <div className="budgetSummary__itemHeader">
                <div className="budgetSummary__itemName">Name</div>
                <div className="budgetSummary__itemDescription">Description</div>
                <div className="budgetSummary__itemAction">Action</div>
                <div className="budgetSummary__itemAmount">Amount</div>
            </div>
            {this.props.data && this.props.data.map((item, idx) =>
                (<SummaryItem
                    key={`summaryItem__${idx}`}
                    name={item.name}
                    amount={item.amount}
                    desc={item.desc}
                    frequency={item.frequency}
                    type={item.type} />)
            )}
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
};

Summary.defaultProps = {
    isHidden: false,
};
