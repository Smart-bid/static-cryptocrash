import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'

import btn from './play_btn.png'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            play: false,
            link: 'https://player.vimeo.com/video/323785939?app_id=122963'
        }
    }

    handlePlay() {
        if (window.sbidTracking) {
            window.sbidTracking.settings.params.video_play = "1";
        }
        this.setState({play: true});
    }

    render() {
        let languageManager = this.props.version;

        return (
            <div className="VideoPlayer component-ivideo">
                <div className="videoWrapper">
                    <ReactPlayer
                        url={this.state.link}
                        playing={this.state.play}
                        controls={true}
                        width='100%'
                        height='100%'
                        onClick={()=>{this.props.trackVideoPlay()}}
                    />
                </div>
                <div className="videoOverlayInner" style={{display: this.state.play ? 'none' : ""}}>
                    <div className="videoOverlayHeadline">{languageManager.video}</div>
                    <a href="#overlay?" id="videoOverlayPlay">
                        <img src={btn} alt="play" onClick={this.handlePlay.bind(this)}/>
                    </a>
                </div>
            </div>
        )
    }
}