import React, {Component} from 'react'
import ReactPlayer from 'react-player'

import btn from './play_btn.png'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            play: false,
            hide: true
        }
    }

    hideElement = () => {
        this.setState({
            hide: !this.state.hide,
            play: !this.state.play
        });
    };


    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className="VideoPlayer">
                <div className={`videoOverlayInner ` + this.state.hide} onClick={this.hideElement}>
                    <p>{languageManager.video_placeholder}</p>
                    <img src={btn} alt="play-button"/>
                </div>
                <ReactPlayer url="https://player.vimeo.com/video/323785939?app_id=122963" playing={this.state.play} controls={true} muted width='100%' height='100%' onClick={this.props.trackVideoPlay}/>
            </div>
        )
    }
}