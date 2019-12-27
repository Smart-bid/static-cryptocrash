import React, { Component } from 'react'

import logo from './cryptocrash.svg'

export default class Header extends Component {

    render() {
        let version = this.props.version;

        return (
            <header className='Header'>
                <div className="disclaimerHeader">{version.disc}</div>
                <div className="container">
                    <img src={logo} id="logoHeader" className="img-responsive" alt="logo"/>

                    <div className="row">
                        <div className="col-md-7 col-sm-10 col-lg-7">
                            <h1>
                                {version.title}
                            </h1>
                            <h2>
                                <strong>
                                    <a>
                                        <strong>{version.subtitle}</strong>
                                    </a>
                                    {version.span[0]} {version.span[1]}
                                </strong>
                            </h2>
                        </div>
                    </div>
                 </div>   
            </header>
        )
    }
}
