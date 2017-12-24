import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.message,
        }
    }

    dismiss() {
        this.setState({
            show: false,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.message
        });
    }

    render() {
        if (!this.state.show) {
            return null
        }

        return (<div onClick={this.dismiss.bind(this)} role="alert" className={`notification alert alert-${this.props.type}`}>
            <p className="notification__message">{this.props.message}</p>
            <button onClick={this.dismiss.bind(this)} type="button" className="close right" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>);
    }
}

Notification.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
};
