import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Tooltip from './../../Global/ui/tooltip.jsx';
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
            desc: '',
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
                desc: '',
                validState: '',
            });
            this.props.createIncomeExpenseItem({
                name: this.state.name,
                amount: this.state.amount,
                desc: this.state.desc,
                frequency: this.state.frequency,
                type: this.props.type,
                total: this.props.total,
                totalExpenses: this.props.totalExpenses,
            })
        }
    }

    render() {
        if (!this.props.type) return null;

        return (<div className={`newIncomeExpense ${this.state.validState}`}>
            <div className="newIncomeExpense__name">
                <input autoFocus value={this.state.name} onChange={this.updateItem.bind(this)} className="wide" type="text" name="name" placeholder={`Add name of ${this.props.type}`} />
            </div>
            <div className="newIncomeExpense__amount">
                <input value={this.state.amount} onFocus={() => { this.setState({ amount: '' }) }} onChange={this.updateItem.bind(this)} className="wide" type="text" name="amount" placeholder="$" />
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
                {/*<Tooltip toggle={this.toggleHelper.bind(this)} isHidden={this.state.helperIsHidden} message={HELPER_TEXT.REOCCURING_EXPENSES} />*/}
                </label>
            </div>
            <div className="newIncomeExpense__desc">
                <input value={this.state.desc} onFocus={() => { this.setState({ desc: '' }) }} onChange={this.updateItem.bind(this)} className="wide" type="text" name="desc" placeholder="Description" />
            </div>
            <div className="newIncomeExpense__save">
                <button onClick={this.save.bind(this)} className="btn newIncomeExpense__saveBtn">Save {this.props.type}</button>
                <button onClick={this.props.dismiss} className="btn btn-danger">Cancel</button>
            </div>
        </div>);
    }

}

NewIncomeExpense.propTypes = {
    type: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    createIncomeExpenseItem: PropTypes.func.isRequired,
    dismiss: PropTypes.func,
    total: PropTypes.number,    
    totalExpenses: PropTypes.number,
};
