import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Settings from './../Settings/components/nav.jsx';
import { Link } from 'react-router';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="header">
            <div className="header__name">hi {this.props.username}</div>
            <ul className="header__nav nav nav-pills">
                <li role="presentation" className="active">
                    <Link to="/">Dashboard</Link>
                </li>
                <li role="presentation">
                    <Link to="/budget-settings">Settings</Link>
                </li>
            </ul>
            {/*<Settings />*/}
        </div>;
    }

}

Header.propTypes = {
    userName: PropTypes.string,
};
