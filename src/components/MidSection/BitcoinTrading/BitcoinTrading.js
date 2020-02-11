import React from "react";
//Components
import Slider from './Slider/Slider'

//Images
import person from './images/thinking-man.png'
const BitcoinTrading = (props) => {
    let languageManager = props.languageManager();
    return(
        <div className="BitcoinTrading">
            <div className="container">
                <div className="wrapper-flex">
                    <div className="background">
                        <img src={person} alt="" draggable={false} />
                    </div>
                    <div className="info">
                        <h3 className="section-heading left">
                            {languageManager.bitcoin_trading_title}
                        </h3>
                        <p>
                            {languageManager.bitcoin_trading_subtitle}
                        </p>
                    </div>
                </div>

                <Slider/>

            </div>
        </div>
    )
};

export default BitcoinTrading;