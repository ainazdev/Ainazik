import React, {useState} from 'react';
import Icon from '../../img/Icon.svg'
import {BsArrowRight} from "react-icons/bs";
import ModalBtn from "./ModalBtn";

const Service = () => {
    return (
        <div id="service">
            <div className="container">
                <div className="service">
                    <h1>Our Service </h1>
                    <p>We turn information into actionable insights We work to understand your issues <br/>
                        and are driven to ask better questions in the pursuit of making work.</p>
                </div>
                <div className="service--desc">
                    <div className="service--block">
                        <div className="service--block__bg">
                            <div className="service--block__bg--more">
                                <img src={Icon} alt=""/>
                                <h1>Social Assistant</h1>
                                <p className="text-center text-amber-800">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi
                                    Ut ut felis congue nisl hendrerit commodo.</p>
                                    <ModalBtn  title={"Social Assistant"}  bg={"red"}/>
                            </div>
                        </div>
                    </div>
                    <div className="service--block">
                        <div className="service--block__bg">
                            <div className="service--block__bg--more">
                                <img src={Icon} alt=""/>
                                <h1>Order Management</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi
                                    Ut ut felis congue nisl hendrerit commodo.</p>
                                <ModalBtn  title={"Order Management"}  bg={"black"}/>
                            </div>
                        </div>
                    </div>
                    <div className="service--block">
                        <div className="service--block__bg">
                            <div className="service--block__bg--more">
                                <img src={Icon} alt=""/>
                                <h1>Crypto Platform</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi
                                    Ut ut felis congue nisl hendrerit commodo.</p>
                                <ModalBtn  title={"Crypto Platform"}  bg={"#1d1d1d"}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Service;