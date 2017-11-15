import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { View as LoginPage } from "./pages/Login";

export default class extends React.Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </ConnectedRouter>
        );
    }
}