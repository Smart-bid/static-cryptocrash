import React, {Component} from 'react'
import logo from './logo.svg'

export default class BottomSection extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <section className='BottomSection'>

                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="logo" draggable={false}/>
                    </div>

                    <div className="links">
                        <div className="copyrights">
                                <span>
                                    {languageManager.copyright[0]}&nbsp;{new Date().getFullYear()}&nbsp;
                                    {languageManager.copyright[1]}
                                </span>
                        </div>
                        <ul>
                            <li>
                                <a onClick={() => this.props.pageHandler('privacy')}>Privacy Policy</a>
                            </li>
                            <li>
                                <a onClick={() => this.props.pageHandler('terms')}>Terms</a>
                            </li>
                            <li>
                                <a onClick={() => this.props.pageHandler('spam')}>Report Ad / Spam</a>
                            </li>
                        </ul>
                    </div>
                    <div className="disclaimer">
                        <p><strong>{languageManager.disclaimer[0]}</strong>{languageManager.disclaimer[1]}</p>
                        <p>{languageManager.disclaimer[2]}</p>
                        <p>{languageManager.disclaimer[3]}</p>
                        <p>{languageManager.disclaimer[4]}</p>
                        <p>{languageManager.disclaimer[5]}</p>
                        <p>{languageManager.disclaimer[6]}</p>
                    </div>
                </div>

            </section>
        )
    }
}
