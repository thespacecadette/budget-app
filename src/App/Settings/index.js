import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { CSSTransitionGroup } from 'react-transition-group';
// import { removeIncomeExpense, resetIncomeExpense, createNewIncomeExpense } from './actions';
// import New from './components/new.jsx';
// import Notification from './../Global/ui/notification.jsx';
// import Summary from './components/summary.jsx';

export class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };
    }

    render() {
        return (<div className="settings">
            <div className={this.state.toggle ? 'dropdown open' : 'dropdown'}>
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.toggle} onClick={() => {
                this.setState({
                    toggle: !this.state.toggle
                })
            }}>
              Settings
            </button>
            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
              <li><a href="#">Notifications</a></li>
              <li><a href="#">Profile</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Log out</a></li>
            </ul>
          </div>
        </div>);
    }
}

Settings.propTypes = {
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
)(Settings)

export default ConnectedAppContainer;

