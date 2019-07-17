import './MessagePage.css';
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MessageList from '../Messages/MessageList/MessageList';

class MessagePage extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/messages" />
                )} />
                <Route exact path="/messages" component={MessageList} />
            </Switch>
        )
    }
}

export default MessagePage;