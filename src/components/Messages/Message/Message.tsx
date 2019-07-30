import React, { Component, } from "react";
import "./Message.css";
import ApiManager from '../../../util/apiManager';
import SuccessAnimatiion from "../../UI/Completed/SuccessAnimation"
import Check from "../../../assets/images/check.png"
import Close from "../../../assets/images/close.png"

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
    isPersonal: true,
    toUserId: number,
    isShow: boolean,
    isSuccess: boolean;
    imgItem: any;
    messageText: string;
    text: string;
}
export default class Message extends Component<IMessageProps, IMessageState> {

    public apiManager = new ApiManager();

    constructor(props: any) {
        super(props);
        this.state = {
            isShow: false,
            toUserId: 0,
            isPersonal: true,
            isSuccess: false,
            imgItem: null,
            messageText: "",
            text: "",
        };
    }


    public handleNotification = (text: string, img: any) => {
        this.setState({
            isSuccess: true,
            imgItem: img,
            text: text
        });

        setTimeout(() => this.setState({ isSuccess: false }), 2000);
    }


    public handleSend = async (e: any) => {
        const adminsPost = {
            Subject: this.props.subject,
            PostText: this.state.messageText,
            PostDate: new Date(),
            IsPersonal: true,
            ToUserId: this.state.toUserId
        };

        if (adminsPost.Subject === "" || adminsPost.PostText === "") {
            this.handleNotification("Заповніть всі поля", Close)

            return;
        }
        const response = await this.apiManager.createAdminsPost(JSON.stringify(adminsPost));

        if (response.status === 201) {
            this.setState({messageText:"",isShow:false})
            this.handleNotification("Відправлено", Check)
        }
        else {
            this.handleNotification("Помилка на сервері", Close)
            console.log(response);
        }
    }


    public handleChange = (e: any) => {
        this.setState({
            messageText: e.target.value
        });
    }

    public render() {
        return (
            <div className="main">
                <SuccessAnimatiion isSuccess={this.state.isSuccess} text={this.state.text} imgSrc={this.state.imgItem} />
                <b className="fullName" >{`Від: ${this.props.firstName} ${this.props.lastName}`}</b>
                <div className="performance" onClick={() => this.setState({ isShow: !this.state.isShow, toUserId: this.props.accountId })}>
                    <div className="row">
                        <p className="col-md-11 pull-left perfTitle" >{this.props.subject}</p>
                    </div>
                    <p>{this.props.messageText}</p>
                </div>

                {this.state.isShow ? <input type="text" placeholder="Введіть повідомлення" className="replyForm" onChange={this.handleChange} /> : null}
                <button className="saveButton" onClick={this.handleSend} ><i className="fas fa-times-circle saveIcon" ></i>Відповісти</button>
            </div>
        );
    }
}