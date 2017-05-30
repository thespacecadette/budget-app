import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Budget extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="budget">
            BUDGET
            </div>;
    }

}

Budget.propTypes = {
    budget: PropTypes.object,
};
