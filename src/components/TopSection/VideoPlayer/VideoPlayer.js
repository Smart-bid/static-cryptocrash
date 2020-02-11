import React, {Component} from 'react'
import Vimeo from '@u-wave/react-vimeo'

import btn from './play_btn.png'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            play: true,
            hide: true
        }
    }

    hideElement = () => {
        this.setState({
            hide: !this.state.hide,
            play: !this.state.play
        }, () => {
            this.props.trackVideoPlay();
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
                <Vimeo video="https://player.vimeo.com/video/323785939?app_id=122963" paused={this.state.play}
                       responsive={true} className="vimeo-player"/>
            </div>
        )
    }
}