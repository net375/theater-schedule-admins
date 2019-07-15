import React, { Component, } from "react";
import "./Message.css";

interface IMessageProps {
    index: number;
    subject: string;
    messageText: string;
    accountId: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface IMessageState {
    
}
export default class Message extends Component<IMessageProps, IMessageState> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <b className="fullName" >{`Від: ${this.props.firstName} ${this.props.lastName}`}</b>
                <div className="performance">
                    <div className="row">
                        <p className="col-md-11 pull-left perfTitle" >{this.props.subject}</p>
                    </div>
                    <p>{this.props.messageText}</p>
                </div>
            </div>
        );
    }
}