import React, {useState} from 'react';
import Icon from "../../img/Icon.svg";
import {BsArrowRight} from "react-icons/bs";

interface I {
    title: string
    bg: string
}


const ModalBtn = ({bg, title}: I) => {
    const [btn, setBtn] = useState<boolean>(true)

    return (
        <div>
            <button onClick={() => setBtn(!btn)}>Learn more <BsArrowRight className="lg"/></button>

            <div hidden={btn}>
                <div className="modal">
                    <div className="service--block">
                        <div style={{background: bg}} className="service--block__bg">
                            <div className="service--block__bg--more">
                                <img src={Icon} alt=""/>
                                <h1>{title}</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi
                                    Ut ut felis congue nisl hendrerit commodo.</p>
                                <button>Learn more <BsArrowRight className="lg"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalBtn;