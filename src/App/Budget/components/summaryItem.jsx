import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SummaryItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div className={`budgetSummaryItem__item budgetSummaryItem__item-${this.props.type}`}>
                    <div className="budgetSummaryItem__name">{this.props.name}</div>
                    <div className="budgetSummaryItem__description">{this.props.desc}</div>
                    <div className="budgetSummaryItem__action">{this.props.name}</div>
                    <div className="budgetSummaryItem__amount">{this.props.amount}</div>
                    <div className="budgetSummaryItemMask" />
            </div>;
    }
}

SummaryItem.propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,    
    frequency: PropTypes.string.isRequired,    
    desc: PropTypes.string,
};
