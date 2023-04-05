import React from 'react';
import {FaTelegramPlane} from "react-icons/fa";

const Latest = () => {
    return (
        <div id='latest'>
            <div className="container">
                <div className="latest">
                    <div className="latest--news">
                        <h3>Subscribe to get the Latest News</h3>
                        <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                      <div className="latest--news__inp">
                          <input type="text" placeholder="Enter your email address"/>
                          <button> <FaTelegramPlane/> Subscribe</button>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest;