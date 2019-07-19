import './SuccessAnimation.css';
import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary"


interface ISuccessProps {
    isSuccess: boolean;
    imgSrc:any;
    text: string;
}

const SuccessAnimatiion = (props: ISuccessProps) => {
    return (
        props.isSuccess?(
            <Aux>
                <div className="Backdrop"></div>
                <div className="success">
                    <img src={props.imgSrc} />
                    <text className="text">{props.text}</text>
                </div>
            </Aux>):null
    );
};


export default SuccessAnimatiion;