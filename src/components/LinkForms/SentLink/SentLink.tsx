import './SentLink.css';
import React, { Component, useEffect } from "react";
import SuccessAnimatiion from "../../UI/Completed/SuccessAnimation"
import Aux from "../../../hoc/Auxiliary"
import apiManager from "../../../util/apiManager";
import Check from "../../../assets/images/check.png"
import Close from "../../../assets/images/close.png"

interface ISentLinkState {
    url: string;
    isSuccess: boolean;
    imgItem: any;
    text: string;
}

interface ISentLinkProps {

}


class SentLink extends Component<ISentLinkProps, ISentLinkState> {
    public apimanager = new apiManager();

    constructor(props: any) {
        super(props);
        this.state = {
            url: "",
            isSuccess: false,
            imgItem: null,
            text: ""
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    public handleChange(e: any) {
        const val = e.target.value;

        this.setState({ url: val, });

    }

    public handleNotification = (text: string, img: any) => {
        this.setState({
            isSuccess: true,
            imgItem: img,
            text: text
        });

        setTimeout(() => this.setState({ isSuccess: false }), 2000);
    }

    public handleSave = async () => {
        const url = { "url": this.state.url };

        if (url.url === "") {
            this.handleNotification("Введіть посилання", Close);
            return;
        }

        const resp = await this.apimanager.sentLink(JSON.stringify(url))
        const obj = JSON.stringify(resp);

        if (resp.status === 201) {
            this.setState({ url: "" });
            this.handleNotification("Посилання збережено", Check)
        }
        else if (resp.status === 500) {
            this.handleNotification("Виникла помилка на сервері", Close)
        } else {
            this.handleNotification("Не вдалось підключитись до серверу. Перевірте з'єднання з сервером.", Close)
        }

    }

    render() {
        return (
            <Aux>
                <SuccessAnimatiion isSuccess={this.state.isSuccess} text={this.state.text} imgSrc={this.state.imgItem} />
                <div className="Sentlink">
                    <input type="url" name="url" onChange={this.handleChange} value={this.state.url} placeholder="Введіть посилання на опитування" />
                    <button className="saveButton" onClick={this.handleSave} ><i className="fas fa-times-circle saveIcon" ></i>Зберегти</button>
                </div>
            </Aux>
        )
    }
}

export default SentLink;