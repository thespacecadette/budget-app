import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="header">
            <div className="header__name">welcome {this.props.username}</div>
            </div>;
    }

}

Header.propTypes = {
    userName: PropTypes.string,
};
