import React from 'react';
import logo from '../../img/logo.svg'
import {AiFillInstagram, AiFillTwitterCircle, AiTwotoneMail} from "react-icons/ai";
import {BsFillTelephoneInboundFill, BsPinterest} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {GoLocation} from "react-icons/go";

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className='footer'>
                    <div className="footer--last">
                        <div className='footer--last__blocks'>
                            <div className="footer--last__blocks--img">
                                <img src={logo} alt=""/>
                                <h3>Zone. </h3>
                            </div>
                            <div className="footer--last__blocks--descrip">
                                <a href=""> <GoLocation/> Bangladesh</a>
                                <a href=""> <BsFillTelephoneInboundFill/> 0943833399</a>
                                <a href=""> <AiTwotoneMail/> support@zone.com</a>
                            </div>
                            <div className="footer--last__blocks--ion">
                                <FaFacebook/>
                                <AiFillTwitterCircle/>
                                <AiFillInstagram/>
                                <BsPinterest/>
                            </div>
                        </div>
                        <div className="footer--last__teg">
                            <a href="">Service</a>
                            <a href="">Order Management</a>
                            <a href="">Social Assistant</a>
                            <a href="">Crypto Platform</a>
                            <a href="">Analyzer of the News</a>
                        </div>
                        <div className="footer--last__teg">
                            <a href="">Company</a>
                            <a href="">About Us</a>
                            <a href="">News</a>
                            <a href="">Our trusted partner</a>
                            <a href="">New users FAQ</a>
                        </div>
                        <div className="footer--last__teg">
                            <a href="">Supports</a>
                            <a href="">Help center</a>
                            <a href="">Feedbcak</a>
                            <a href="">Contact us</a>
                            <a href="">Terms conditins</a>
                        </div>
                        <div className="footer--last__teg">
                            <a href="">Resources</a>
                            <a href="">Download app</a>
                            <a href="">Blog</a>
                            <a href="">What’s new</a>
                            <a href="">Sitemap</a>
                        </div>

                    </div>
                    <hr/>
                    <div className="footer--par">
                        <p>© 2021 Zone. - All rights reserved.</p>
                       <div className="footer--par__terms">
                           <h5>Privacy</h5>
                           <h5>Security</h5>
                           <h5>Terms</h5>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;