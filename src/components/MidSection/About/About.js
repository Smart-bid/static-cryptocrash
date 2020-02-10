import React from "react";

//Images
import lady from './images/lady.png'
import chart from './images/chart.svg'

const About = (props) => {
    let languageManager = props.languageManager();
    return(
        <div className="About">
            <div className="container">
                <div className="wrapper-flex">
                    <div className="text-zone">
                        <h3>
                            {languageManager.about_title}
                        </h3>
                        <p>
                            {languageManager.about_info[0]}
                        </p>
                        <br/>
                        <p>
                            {languageManager.about_info[1]}
                        </p>
                    </div>
                    <div className="image">
                        <img src={chart} className="chart" alt=""/>
                        <img src={lady} className="girl" alt="" draggable={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;