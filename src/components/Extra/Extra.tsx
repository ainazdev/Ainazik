import React from 'react';
import Plan from '../../img/plan.png'

const Extra = () => {
    return (
        <div id='extra'>
            <div className="container">
                <div className="extra">
                    <div className="extra--read">
                        <h1>We complete every projects <br/>
                            extra care as customer need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                            scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                            Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                            error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button>Read more</button>
                    </div>
                    <div className="extra--proj">
                        <img src={Plan} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Extra;