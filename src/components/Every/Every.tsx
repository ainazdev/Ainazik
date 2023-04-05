import React from 'react';
import Man from '../../img/man.png'

const Every = () => {
    return (
        <div id='every'>
            <div className="container">
                <div className="every">
                    <div className="every--proj">
                        <img src={Man} alt=""/>
                    </div>
                    <div className="every--read">
                        <h1>We complete every projects <br/>
                            extra care as customer need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                            scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                            Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                            error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button>Read more</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Every;