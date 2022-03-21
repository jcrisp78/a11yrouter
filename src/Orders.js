import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Orders extends Component {

    componentDidMount() {
        this.props.setA11yMessage('Navigated to orders page.');
        document.title = "Orders - a11yrouter";
    }

    render() {
        return (
            <section>
                <h1 className="page-header">Orders</h1>
            </section>
        );
    }
}

export default connect(null, actions)(Orders);
