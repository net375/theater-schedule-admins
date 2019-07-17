import './LinkForms.css';
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MessageList from '../Messages/MessageList/MessageList';
import SentLink from '../LinkForms/SentLink/SentLink'

class LinkForms extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/formslink" />
                )} />
                <Route exact path="/formslink" component={SentLink} />
            </Switch>
        )
    }
}

export default LinkForms;