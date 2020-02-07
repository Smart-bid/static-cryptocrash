import React, { Component } from 'react'

import logo from './cryptocrash.svg'

export default class Header extends Component {

    render() {
        let languageManager = this.props.version;

        return (
            <header className='Header'>
                <div className="disclaimerHeader">{languageManager.disc}</div>
                <div className="container">
                    <img src={logo} id="logoHeader" className="img-responsive" alt="logo"/>

                    <div className="row">
                        <div className="col-md-7 col-sm-10 col-lg-7">
                            <h1>
                                {languageManager.title}
                            </h1>
                            <h2>
                                <strong>
                                    <a>
                                        <strong>{languageManager.subtitle}</strong>
                                    </a>
                                    {languageManager.span[0]} {languageManager.span[1]}
                                </strong>
                            </h2>
                        </div>
                    </div>
                 </div>   
            </header>
        )
    }
}
