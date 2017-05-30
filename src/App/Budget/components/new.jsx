import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tooltip from './../../Global/ui/tooltip.jsx';
import { HELPER_TEXT } from './../constants';

export default class NewIncomeExpense extends Component {
    constructor(props) {
        super(props);

        this.state = {
            helperIsHidden: true,
            name: false,
            amount: false,
            frequency: false,
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
            this.setState({
                name: false,
                amount: false,
                frequency: false,
                validState: '',
            });
            this.props.updateIncomeExpense({
                name: this.state.name,
                amount: this.state.amount,
                frequency: this.state.frequency,
                type: this.props.type,
            })

            this.props.dismiss();
        }
    }

    render() {
        if (!this.props.type) return null;
        
        return <div className={`newIncomeExpense ${this.state.validState}`}>
            <h2>Add {this.props.type}</h2>
            <div className="newIncomeExpense__name">
                <input onChange={this.updateItem.bind(this)} className="wide" type="text" name="name" placeholder={`Name of ${this.props.type}`} />
            </div>
            <div className="newIncomeExpense__amount">
                <input onChange={this.updateItem.bind(this)} className="wide" type="text" name="amount" placeholder="$" />
            </div>
            <div className="clear" />
            <div className="newIncomeExpense__frequency">
                <label><input className="newIncomeExpense__frequencyOneOff" onChange={this.updateItem.bind(this)} type="radio" name="frequency" value="oneOff" />One off</label>
                <label>
                    <input onChange={this.updateItem.bind(this)} type="radio" name="frequency" value="reoccuring" />
                    Reoccuring
                <Tooltip toggle={this.toggleHelper.bind(this)} isHidden={this.state.helperIsHidden} message={HELPER_TEXT.REOCCURING_EXPENSES} />
                </label>
            </div>
            <div className="newIncomeExpense__save">
                <button onClick={this.save.bind(this)} className="btn btn-block btn-success btn-lg">Save {this.props.type}</button>
                <button onClick={this.props.dismiss} className="btn btn-block btn-danger btn-lg">Cancel</button>
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
