import React, {Component} from 'react'

//Components
import Header from "./Header/Header"
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform from './Regform/Regform'
import RunningLine from './RunningLine/RunningLine'

//Images
import norton from './images/norton_logo.png';
import mcAfee from './images/mcafee_logo.png';
import truste from './images/truste_logo.png';
import accreditedBusiness from './images/bbb_logo.png';
import nasdaq from './images/nasdaq_logo.png';
import euronext from './images/euronext_logo.png';
import tmx from './images/tmx_logo.png';

export default class TopSection extends Component {
    render() {
        let languageManager = this.props.languageManager();
        return (
            <section className='TopSection'>

                <Header languageManager={this.props.languageManager}/>

                <div className="top-reg" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 video-player">
                                <VideoPlayer {...this.props}/>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 form">
                                <div className="regform">
                                    <div className="reg-title">
                                        <h3>
                                            {languageManager.title_form[0]}
                                        </h3>
                                        <span>{languageManager.title_form[1]}</span>
                                    </div>
                                    <Regform {...this.props}/>
                                </div>
                            </div>
                        </div>
                        <div className="brand-icons">
                            <div className="wrapper">
                                <img src={norton} alt=""/>
                                <img src={mcAfee} alt=""/>
                                <img src={truste} alt=""/>
                                <img src={accreditedBusiness} alt=""/>
                                <img src={nasdaq} alt=""/>
                                <img src={euronext} alt=""/>
                                <img src={tmx} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <RunningLine/>

            </section>
        )
    }
}
