import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import {View as LoginPage} from "./pages/Login";

export default class extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </HashRouter>
        );
    }
}