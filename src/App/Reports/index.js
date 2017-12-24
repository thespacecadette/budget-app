import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { CSSTransitionGroup } from 'react-transition-group';
// import { removeIncomeExpense, resetIncomeExpense, createNewIncomeExpense } from './actions';
// import New from './components/new.jsx';
// import Notification from './../Global/ui/notification.jsx';
// import Summary from './components/summary.jsx';

export class Reporting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="reporting">
            GRAPH 
        </div>);
    }
}

Reporting.propTypes = {
    // budget: PropTypes.object,
    // createIncomeExpenseItem: PropTypes.func.isRequired,
    // resetIncomeExpenses: PropTypes.func.isRequired,
    // removeIncomeExpense: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => {
//     return {
//         budget: state.budget,
//     }
// };

// const mapDispatchToProps = (dispatch) => ({
//     createIncomeExpenseItem: (item) => dispatch(createNewIncomeExpense(item)),
//     resetIncomeExpenses: () => dispatch(resetIncomeExpense()),
//     removeIncomeExpense: (id, amount, type, total, totalExpenses) => dispatch(removeIncomeExpense(id, amount, type, total, totalExpenses)),
// });

export const ConnectedAppContainer = connect(
    // mapStateToProps,
    // mapDispatchToProps
)(Reporting)

export default ConnectedAppContainer;

