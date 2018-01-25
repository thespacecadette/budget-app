import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { CSSTransitionGroup } from 'react-transition-group';
import { updateBudgetFrequency } from './actions';
import Notification from './../Global/ui/notification.jsx';

export class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="settings">
            <h2>Settings</h2>
            <Notification type="success" message={this.props.settings.status} />
            <form>
                <div className="radio settings__frequency">
                    <h3>Frequency</h3>
                    <label>
                        <input onChange={(event) => { this.props.updateFrequency(event.target.value) }} type="radio" value="daily" checked={this.props.settings.frequency === 'daily'}/> Daily
          </label>
                    <label>
                        <input onChange={(event) => { this.props.updateFrequency(event.target.value) }} type="radio" value="fortnightly" checked={this.props.settings.frequency === 'fortnightly'} /> Fortnightly
        </label>
                    <label>
                        <input onChange={(event) => { this.props.updateFrequency(event.target.value) }} type="radio" value="monthly" checked={this.props.settings.frequency === 'monthly'} /> Monthly
      </label>
                    <label>
                        <input onChange={(event) => { this.props.updateFrequency(event.target.value) }} type="radio" value="quarterly" checked={this.props.settings.frequency === 'quarterly'} /> Quarterly
    </label>
                    <label>
                        <input onChange={(event) => { this.props.updateFrequency(event.target.value) }} type="radio" value="annually" checked={this.props.settings.frequency === 'annually'} /> Annually
  </label>
                </div>
            </form>
        </div>);
    }
}

Settings.propTypes = {
    settings: PropTypes.object,
    updateFrequency: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        settings: state.settings,
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateFrequency: (frequency) => dispatch(updateBudgetFrequency(frequency)),
});

export const ConnectedAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

export default ConnectedAppContainer;

