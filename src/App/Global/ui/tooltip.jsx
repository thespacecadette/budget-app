import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tooltip extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isHidden) {
            return (<div onClick={this.props.toggle} className="tooltip__hidden">info<span className="glyphicon glyphicon-question-sign" /></div>)
        }
        return (<div className="tooltip__show">
            <p className="tooltip__message">{this.props.message}</p>
            <button className="btn btn-default btn-xs" onClick={this.props.toggle}>close</button>
        </div>);
    }
}

Tooltip.propTypes = {
    message: PropTypes.string,
    isHidden: PropTypes.bool,
};

Tooltip.defaultProps = {
    isHidden: true,
};
