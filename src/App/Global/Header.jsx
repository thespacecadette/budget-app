import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Settings from './../Settings/components/nav.jsx';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="header">
            <div className="header__name">welcome {this.props.username}</div>
            <Settings />            
            </div>;
    }

}

Header.propTypes = {
    userName: PropTypes.string,
};
