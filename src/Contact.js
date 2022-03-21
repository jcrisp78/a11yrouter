import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Contact extends Component {

    componentDidMount() {
        this.props.setA11yMessage('Navigated to contact page.');
        document.title = "Contact - a11yrouter";
    }

    render() {
        return (
            <section>
                <h1 className="page-header">Contact</h1>
            </section>
        );
    }
}

export default connect(null, actions)(Contact);
