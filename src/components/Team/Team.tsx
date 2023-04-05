import React from 'react';
import Kep from "../../img/cap.svg";
import Wom from "../../img/wom.png";
import Bus from "../../img/bus.png";
import Head from "../../img/head.png";
import {BsFacebook} from "react-icons/bs";
import {AiFillLinkedin, AiFillSkype, AiFillTwitterCircle} from "react-icons/ai";

const Team = () => {
    return (
        <div>
            <div id="team">
                <div className="container">
                    <div className="team">
                        <h1>Met Our Team </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                            accumsan nisi Ut ut felis congue nisl hendrerit commodo.

                        </p>
                    </div>
                    <div className="team--desc">
                        <div className="team--block">
                            <div className="team--bl__bg">
                                <div className="team--bl__bg--mor">
                                    <img src={Kep} alt=""  className="flex items-center"/>
                                    <h1>Sunny Khan</h1>
                                    <span>Executive officer</span>
                                    <div className="icons">
                                        <AiFillSkype/>
                                        <AiFillLinkedin/>
                                        <AiFillTwitterCircle/>
                                        <BsFacebook/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team--bl">
                            <div className="team--bl__bg">
                                <div className="team--bl__bg--mor">
                                    <img src={Wom} alt=""/>
                                    <h1>Alina Jesia</h1>
                                    <span>UX/UI DESIGNER</span>
                                    <div className="icons">
                                        <AiFillSkype/>
                                        <AiFillLinkedin/>
                                        <AiFillTwitterCircle/>
                                        <BsFacebook/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team--block">
                            <div className="team--bl__bg">
                                <div className="team--bl__bg--mor">
                                    <img src={Bus} alt=""/>
                                    <h1>Alex Sohag</h1>
                                    <span>BUSINESS DEVELOPMENT</span>
                                    <div className="icons">
                                        <AiFillSkype/>
                                        <AiFillLinkedin/>
                                        <AiFillTwitterCircle/>
                                        <BsFacebook/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team--bl">
                            <div className="team--bl__bg">
                                <div className="team--bl__bg--mor">
                                    <img src={Head} alt=""/>
                                    <h1>Afroza Mou</h1>
                                    <span>Head of marketing</span>
                                    <div className="icons">
                                        <AiFillSkype/>
                                        <AiFillLinkedin/>
                                        <AiFillTwitterCircle/>
                                        <BsFacebook/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;