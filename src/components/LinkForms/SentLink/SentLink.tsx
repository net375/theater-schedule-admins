import './SentLink.css';
import React, { Component, useEffect } from "react";
import SuccessAnimatiion from "../../UI/Completed/SuccessAnimation"
import Aux from "../../../hoc/Auxiliary"
import apiManager from "../../../util/apiManager";

interface ISentLinkState {
    url: string;
    isSuccess: boolean;
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
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    public handleChange(e: any) {
        const val = e.target.value;

        this.setState({ url: val, });

    }

    public handleSave = async () => {
        const url = {"url":this.state.url};

        if (url.url !== "") {
            //alert("Посилання відправленоо");
            const resp = await this.apimanager.sentLink(JSON.stringify(url))
            const obj = JSON.stringify(resp);
            console.log(obj)
            if (resp.status === 201)
            {
                this.setState({ url: "", isSuccess: true });
                setTimeout(() => this.setState({ isSuccess: false }), 3000);
            }
            else if (resp.status === 500) {
                alert("Виникла помилка на сервері.");
            } else {
                alert("Не вдалось підключитись до серверу. Перевірте з'єднання з сервером.");
            }
            
        }


    }


    render() {
        return (
            <Aux>
                <SuccessAnimatiion isSuccess={this.state.isSuccess} />
                <div className="Sentlink">
                    <input type="url" name="url" onChange={this.handleChange} value={this.state.url} placeholder="Введіть посилання на опитування" />
                    <button className="saveButton" onClick={this.handleSave} ><i className="fas fa-times-circle saveIcon" ></i>Зберегти</button>
                </div>
            </Aux>
        )
    }
}

export default SentLink;