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

    public handleSave = async () => {
        const url = { "url": this.state.url };

        if (url.url !== "") {
            //alert("Посилання відправленоо");
            const resp = await this.apimanager.sentLink(JSON.stringify(url))
            const obj = JSON.stringify(resp);
            console.log(obj)
            if (resp.status === 201) {
                this.setState({ url: "", isSuccess: true });
                this.setState({
                    imgItem: Check,
                    text: "Посилання збережено"
                });
                setTimeout(() => this.setState({ isSuccess: false }), 2000);
            }
            else if (resp.status === 500) {
                this.setState({ url: "", isSuccess: true });
                this.setState({
                    imgItem: Close,
                    text: "Виникла помилка на сервері"
                });
                setTimeout(() => this.setState({ isSuccess: false }), 2000);

            } else {
                this.setState({ url: "", isSuccess: true });
                this.setState({
                    imgItem: Close,
                    text: "Не вдалось підключитись до серверу. Перевірте з'єднання з сервером."
                });
                setTimeout(() => this.setState({ isSuccess: false }), 2000);
            }

        } else {
            this.setState({ url: "", isSuccess: true });
            this.setState({
                imgItem: Close,
                text: "Введіть посилання"
            });
            setTimeout(() => this.setState({ isSuccess: false }), 2000);
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