import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export class SettingsNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };
    }

    render() {
        return (<div className="settings__nav">
            <div className={this.state.toggle ? 'dropdown open' : 'dropdown'}>
            <a className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.toggle} onClick={() => {
                this.setState({
                    toggle: !this.state.toggle
                })
            }}>
              Settings
            </a>
            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
              <li><Link to="/budget-settings">Budget</Link></li>
              {/*<li><a href="#">Notifications</a></li><li role="separator" className="divider"></li>
              <li><a href="#">Log out</a></li>*/}
            </ul>
          </div>
        </div>);
    }
}

SettingsNav.propTypes = {
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

// export const ConnectedAppContainer = connect(
//     // mapStateToProps,
//     // mapDispatchToProps
// )(SettingsNav)

export default SettingsNav;

