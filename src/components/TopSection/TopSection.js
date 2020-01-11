import React, { Component } from 'react'

import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform  from './Regform/Regform'

import video from './btcvid.mp4'
import badges from './badges.png'
import formArrow from './arrow.svg'
import {register} from "../../serviceWorker";

export default class TopSection extends Component {
    constructor(props) {
        super(props)

        this.state = {showmodal: false}
    }
    
    handleScroll() {
        let panel = this.regPanel;

        window.scrollTo({
            top: panel.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    handleClose() {
        this.setState({showmodal: false})
    }

    componentDidMount() {
        setTimeout(() => this.setState({showmodal: true}), 2500)
    }

    render() {
        let version = this.props.languageManager();

        return (
            <div className='TopSection'>
                <Header version={version} handleScroll={this.handleScroll.bind(this)}/>
                <section className="video" id="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <div className="videoOuterWrap">
                                    <div id="mainVideo">
                                        <VideoPlayer link={video} version={version} step={this.props.syncState.step}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div className="registerForm" ref={ref => this.regPanel = ref}>
                                    <div className="formHeader" id="topForm">
                                        <span>{version.topreg1}</span><br/>{version.topreg2}<br/>{version.topreg3}
                                        <div className="arrowSVG">
                                            <img src={formArrow} draggable={false} alt=""/>
                                        </div>
                                    </div>
                                    <Regform {...this.props}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <img src={badges} alt="badges" className="badges"/>
                <div className="modalscreen" style={{display: (this.state.showmodal) ? 'flex' : 'none'}}>
                    <div className="modal">
                        <div className="close" onClick={this.handleClose.bind(this)}>×</div>
                        <div className="title">{version.modal_title}</div>
                        <div className="subtitle">{version.modal_sub}</div>
                        <p>{version.modal_text1}</p>
                        <p>{version.modal_text2}</p>
                        <Regform {...this.props} class={'inmodal'}/>
                    </div>
                </div>
            </div>
        )
    }
}
