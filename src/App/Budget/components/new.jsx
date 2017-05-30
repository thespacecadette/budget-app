import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tooltip from './../../Global/ui/tooltip.jsx';
import { HELPER_TEXT } from './../constants';
import { formatCurrency } from './../../utils/';

export default class NewIncomeExpense extends Component {
    constructor(props) {
        super(props);

        this.state = {
            helperIsHidden: true,
            name: '',
            amount: '',
            frequency: '',
            validState: '',
        }
    }

    toggleHelper() {
        this.setState({
            helperIsHidden: !this.state.helperIsHidden
        });
    }

    updateItem(event) {
        if (event.target.name) {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
    }

    save() {
        if (!this.state.name || !this.state.amount || !this.state.frequency) {
            this.setState({
                validState: 'error',
            });
        } else {
            this.props.dismiss();
            this.setState({
                name: '',
                amount: '',
                frequency: '',
                validState: '',
            });
            this.props.updateIncomeExpense({
                name: this.state.name,
                amount: this.state.amount,
                frequency: this.state.frequency,
                type: this.props.type,
            })
        }
    }

    formatCurrency(event) {
        const formattedCurrency = formatCurrency(event.target.value);

        this.setState({
            amount: formattedCurrency,
        });
    }

    render() {
        if (!this.props.type) return null;

        return <div className={`newIncomeExpense ${this.state.validState}`}>
            <div className="newIncomeExpense__name">
                <input value={this.state.name} onChange={this.updateItem.bind(this)} className="wide" type="text" name="name" placeholder={`Add name of ${this.props.type}`} />
            </div>
            <div className="newIncomeExpense__amount">
                <input value={this.state.amount} onFocus={() => { this.setState({ amount: '' })}} onBlur={this.formatCurrency.bind(this)} onChange={this.updateItem.bind(this)} className="wide" type="text" name="amount" placeholder="$" />
            </div>
            <div className="clear" />
            <div className="newIncomeExpense__frequency">
                <label>
                    <input value={this.state.frequency} className="newIncomeExpense__frequencyOneOff" onChange={this.updateItem.bind(this)} type="radio" name="frequency" value="oneOff" />
                    One off
                </label>
                <label>
                    <input value={this.state.frequency} onChange={this.updateItem.bind(this)} type="radio" name="frequency" value="reoccuring" />
                    Reoccuring
                <Tooltip toggle={this.toggleHelper.bind(this)} isHidden={this.state.helperIsHidden} message={HELPER_TEXT.REOCCURING_EXPENSES} />
                </label>
            </div>
            <div className="newIncomeExpense__save">
                <button onClick={this.save.bind(this)} className="btn btn-block btn-success">Save {this.props.type}</button>
                <button onClick={this.props.dismiss} className="btn btn-block btn-danger">Cancel</button>
            </div>
        </div>;
    }

}

NewIncomeExpense.propTypes = {
    type: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    updateIncomeExpense: PropTypes.func.isRequired,
    dismiss: PropTypes.func,
    init: PropTypes.func,
};
