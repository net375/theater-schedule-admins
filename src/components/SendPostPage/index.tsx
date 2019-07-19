import React from 'react';
import './SendPostPage.css';
import ApiManager from '../../util/apiManager';

interface ISendPostPageProps {
    isPersonal: false,
    toUserId: number
}

interface ISendPostPageState {
    subject: string,
    messageText: string
}

class SendPostPage extends React.Component<ISendPostPageProps, ISendPostPageState> {
    public apiManager = new ApiManager();

    constructor(props: any) {
        super(props);
        this.state = {
            subject: '',
            messageText: ''
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

    public handleSend = async (e: any) => {
        const adminsPost = {
            Subject: this.state.subject,
            PostText: this.state.messageText,
            PostDate: new Date(),
            IsPersonal: false,
            ToUserId: null
        };
        const response = await this.apiManager.createAdminsPost(JSON.stringify(adminsPost));
        if (response.status === 201) {
            alert("Повідомлення відправлено");
            this.setState({
                subject: "",
                messageText: ""
            });
        }
        else {
            alert("Виникла помилка");
            console.log(response);
        }
    }

    public render() {
        return (
            <div className="sendPost">
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