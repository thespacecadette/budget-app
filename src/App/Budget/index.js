import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeIncomeExpense, resetIncomeExpense, createNewIncomeExpense } from './actions';
import New from './components/new.jsx';
import Notification from './../Global/ui/notification.jsx';
import Summary from './components/summary.jsx';
export class Budget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addState: false,
        };
    }

    addState(event) {
        this.props.resetIncomeExpenses();
        this.setState({
            addState: event.target.name,
        });
    }

    render() {
        return (<div className="budget">
            <h2 className={this.state.addState ? 'hidden' : ''}>Budget</h2>
            <Notification type="success" message={this.props.budget.status} />
            <button className={this.state.addState ? 'hidden' : 'budget__addExpense btn'} type="button" name="expense" onClick={this.addState.bind(this)}>Add expense</button>
            <button className={this.state.addState ? 'hidden' : 'budget__addIncome btn'} type="button" name="income" onClick={this.addState.bind(this)}>Add income</button>
            <div className="clear" />
            <New
                createIncomeExpenseItem={this.props.createIncomeExpenseItem}
                total={this.props.budget.total}
                type={this.state.addState}
                isHidden={this.state.addState}
                dismiss={() => { this.setState({ addState: false }) }} />
            <Summary
                removeIncomeExpense={this.props.removeIncomeExpense}
                total={this.props.budget.total}
                data={this.props.budget.incomeExpenses} />
        </div>);
    }
}

Budget.propTypes = {
    budget: PropTypes.object,
    createIncomeExpenseItem: PropTypes.func.isRequired,
    resetIncomeExpenses: PropTypes.func.isRequired,
    removeIncomeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        budget: state.budget,
    }
};

const mapDispatchToProps = (dispatch) => ({
    createIncomeExpenseItem: (item) => dispatch(createNewIncomeExpense(item)),
    resetIncomeExpenses: () => dispatch(resetIncomeExpense()),
    removeIncomeExpense: (id, amount, type, total) => dispatch(removeIncomeExpense(id, amount, type, total)),
});

export const ConnectedAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Budget)

export default ConnectedAppContainer;

