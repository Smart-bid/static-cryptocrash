import React, { Component } from 'react'

import Regform from "../TopSection/Regform/Regform"
import BitcoinTrading from "./BitcoinTrading/BitcoinTrading"
import FamousNames from "./FamousNames/FamousNames";
import About from "./About/About";
import Faq from "./Faq/Faq";

export default class MidSection extends Component {
    render() {
        let languageManager = this.props.languageManager();
        return (
            <section className="MidSection">

                <BitcoinTrading {...this.props}/>

                <FamousNames languageManager={this.props.languageManager}/>

                <About languageManager={this.props.languageManager}/>

                <Faq languageManager={this.props.languageManager}/>

                <section className="bottom-regform">
                    <div className="container">
                        <h3 className="section-heading white">
                            {languageManager.second_form_title}
                        </h3>
                        <h4 className="section-heading size-l white">
                            {languageManager.second_form_subtitle}
                        </h4>
                        <div className="regform">
                            <Regform {...this.props}/>
                        </div>
                    </div>
                </section>

            </section>

        )
    }
}
