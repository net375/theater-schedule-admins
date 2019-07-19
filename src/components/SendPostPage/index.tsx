import React from 'react';
import './SendPostPage.css';
import ApiManager from '../../util/apiManager';
import SuccessAnimatiion from "../UI/Completed/SuccessAnimation"
import Check from "../../assets/images/check.png"
import Close from "../../assets/images/close.png"

interface ISendPostPageProps {
    isPersonal: false,
    toUserId: number
}

interface ISendPostPageState {
    subject: string,
    messageText: string,
    isSuccess: boolean;
    imgItem: any;
    text: string;
}

class SendPostPage extends React.Component<ISendPostPageProps, ISendPostPageState> {
    public apiManager = new ApiManager();

    constructor(props: any) {
        super(props);
        this.state = {
            subject: '',
            messageText: '',
            isSuccess: false,
            imgItem: null,
            text: ""
        };
    }

    public handleChange = (e: any) => {
        switch (e.target.name) {
            case "subject":
                this.setState({
                    subject: e.target.value
                });
                break;
            case "messageText":
                this.setState({
                    messageText: e.target.value
                });
                break;
        }
    }

    public handleNotification = (text:string,img:any) =>
    {
        this.setState({
            isSuccess: true,
            imgItem: img,
            text: text
        });

        setTimeout(() => this.setState({ isSuccess: false }), 2000);
    }

    public handleSend = async (e: any) => {
        const adminsPost = {
            Subject: this.state.subject,
            PostText: this.state.messageText,
            PostDate: new Date(),
            IsPersonal: false,
            ToUserId: null
        };

        if (adminsPost.Subject==="" || adminsPost.PostText==="")
        {
            this.handleNotification("Заповніть всі поля", Close)

            return;
        }
        const response = await this.apiManager.createAdminsPost(JSON.stringify(adminsPost));
        
        if (response.status === 201) {
            this.handleNotification("Посилання збережено", Check)
        }
        else {
            this.handleNotification("Помилка на сервері", Close)
            console.log(response);
        }
    }

    public render() {
        return (
            <div className="sendPost">
                <SuccessAnimatiion isSuccess={this.state.isSuccess} text={this.state.text} imgSrc={this.state.imgItem} />
                <div className="formHeader">
                    <p>Кому: всім</p>

                    <div className="text-right">
                        <button className="saveButton" onClick={this.handleSend}>Надіслати</button>
                    </div>
                </div>
                <div className="inputs">
                    <input type="text" name="subject" 
                        onChange={this.handleChange} 
                        value={this.state.subject}
                        placeholder="Тема повідомлення:" />
                    <textarea className="messageArea" name="messageText" 
                        onChange={this.handleChange} 
                        value={this.state.messageText} 
                        placeholder="Текст повідомлення" />
                </div>
            </div>
        );
    }
}

export default SendPostPage;