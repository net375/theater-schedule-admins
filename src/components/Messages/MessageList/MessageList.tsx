import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import apiManager from "../../../util/apiManager";
import Spinner from "../../UI/Spinner/Spinner";
import Message from "../Message/Message"

import "./MessageList.css";


interface IMessageState {
    messages: Array<{
        messageId: number,
        subject: string,
        messageText: string,
        accountId: number,
        firstName: string;
        lastName: string;
        email: string;
    }>
    isLoading: boolean;
}

interface IMessageProps {
    onChangeCurrentTabId: Function;
}

class MessageList extends Component<IMessageProps, IMessageState> {
    public apimanager = new apiManager();

    constructor(props: any) {
        super(props);
        this.state = {
            messages: [],
            isLoading: true,
        };

    }

    public getMessages = async () => {
        const resp = await this.apimanager.getMessages();
        if (resp.status === 200) {
            const data = await resp.json();
            this.setState({
                messages: data,
            });
        } else if (resp.status === 500) {
            alert("Виникла помилка на сервері.");
        } else {
            alert("Не вдалось підключитись до серверу. Перевірте з'єднання з сервером.");
        }
    }

    public render() {
        return (
            <Aux>
                <Spinner isShow={this.state.isLoading} />
                <div className="perfomanceList">
                    {
                        this.state.messages.map((item) => {
                            return <Message index={item.messageId}
                                key={item.messageId}
                                subject={item.subject}
                                messageText={item.messageText}
                                accountId={item.accountId}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                email={item.email}
                            />;
                        },
                        )}
                </div>
            </Aux>
        );
    }

    public async componentDidMount() {
        await this.getMessages();
        this.setState({
            isLoading: false,
        });
    }

    public componentWillUnmount() {
        console.log("[Performance List]: Component will unmount");
    }
}


export default MessageList;
