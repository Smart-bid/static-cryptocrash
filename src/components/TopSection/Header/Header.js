import React, {Component} from 'react'

import logo from "./logo.svg"

export default class Header extends Component {
    render() {
        let languageManager = this.props.languageManager();
        return (
            <header className="header-container">
                <div className="container">
                    <div className="advertioral">
                        <p>{languageManager.header_title}</p>
                    </div>
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="" draggable={false}/>
                        </a>
                    </div>
                    <div className="text-zone">
                        <h1>
                            {languageManager.title}
                        </h1>
                        <h2>
                            <span>{languageManager.subtitle[0]}</span>{languageManager.subtitle[1]}<br/>
                            {languageManager.subtitle[2]}
                        </h2>
                    </div>
                </div>
            </header>
        )
    }
}