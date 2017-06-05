import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
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
        const newIncomeExpenseForm = this.state.addState ? (<CSSTransitionGroup
                transitionName="budget__items"
                transitionAppear={true}
                transitionEnterTimeout={1000}
                transitionAppearTimeout={1000}
                transitionLeaveTimeout={1000}>
                <New
                    createIncomeExpenseItem={this.props.createIncomeExpenseItem}
                    total={this.props.budget.total}
                    type={this.state.addState}
                    isHidden={this.state.addState}
                    dismiss={() => { this.setState({ addState: false }) }} />
            </CSSTransitionGroup>) : null;

        return (<div className="budget">
            <div className="budget__header">
                <h2 className="left">Budget</h2>
                <button className="budget__addIncome btn" type="button" name="income" onClick={this.addState.bind(this)}>Add income</button>
                <button className="budget__addExpense btn" type="button" name="expense" onClick={this.addState.bind(this)}>Add expense</button>
                <div className="clear" />
            </div>
            <Notification type="success" message={this.props.budget.status} />
            {newIncomeExpenseForm}
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

