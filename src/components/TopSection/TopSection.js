import React, {Component} from 'react'

//Components
import Header from "./Header/Header"
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
// import Regform from './Regform/Regform'
import Regform from './Regform/Regform'

//Images
import logo from './Header/logo.svg'
import brandIcons from './brand-icons.png'

export default class TopSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: null,
        }
    }

    body = document.getElementsByTagName("body")[0];

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
                    </div>
                </div>

                <div className="brand-icons">
                    <div className="container">
                        <img src={brandIcons} alt="" draggable={false}/>
                    </div>

                </div>
            </section>
        )
    }
}
