import './SuccessAnimation.css';
import React, { Component } from "react";
import Check from "../../../assets/images/check.png"
import Aux from "../../../hoc/Auxiliary"


interface ISuccessProps {
    isSuccess: boolean;
}

const SuccessAnimatiion = (props: ISuccessProps) => {
    return (
        props.isSuccess?(
            <Aux>
                <div className="Backdrop"></div>
                <div className="success">
                    <img src={Check} />
                    <text className="text">Посилання збережено</text>
                </div>
            </Aux>):null
    );
};


export default SuccessAnimatiion;