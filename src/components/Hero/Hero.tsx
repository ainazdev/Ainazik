import React from 'react';
import Image from '../../img/img.png'
import {BsFillPlayCircleFill} from "react-icons/bs";

const Hero = () => {
    return (
        <div id='hero'>
            <div className="container">
                <div className='hero'>

                    <div className="hero-block">
                        <h1>Virtual Reality <br/> Business Solutions</h1>
                        <p>We have over 15 year exprience in business consultting arena. We have over <br/> 15 year
                            exprience in business consultting
                            arena and artficial intelligence.</p>
                        <div className="hero-block--btn">
                            <button>Join Us</button>
                            <a href="https://www.youtube.com/watch?v=6T2f8KKf0kI&list=RD6T2f8KKf0kI&start_radio=1&ab_channel=RAAVAMUSIC"><BsFillPlayCircleFill className="mx"/> Watch
                                video</a>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={Image} width={600} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;