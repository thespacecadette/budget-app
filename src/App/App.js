import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Global/Header.jsx';
import Budget from './Budget/index.js';
import Reporting from './Reports/index.js';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="app">
            <Header username={this.props.user.name} />
            <Reporting />
        </div>
        );
    }
};

App.proptypes = {
    user: React.PropTypes.object,
    // budget: React.PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        // budget: state.budget,
    }
};

// const mapDispatchToProps = (dispatch) => ({
//   dispatch,
//   updateForm: (event) => dispatch(updateFormData(event.target.name, event.target.value)),
// });

export const ConnectedAppContainer = connect(
    mapStateToProps,
    //   mapDispatchToProps
)(App)

export default ConnectedAppContainer;
