import React, { Component } from 'react'

import Faq from "./Faq/Faq";
import Regform from "../TopSection/Regform/Regform"
import FamousNames from "./FamousNames/FamousNames";
import logo from "../TopSection/Header/logo.svg";


export default class MidSection extends Component {

    render() {
        let languageManager = this.props.languageManager(),
            steps = [
            {
                className: 'cardb',
                inputs: [
                    {
                        name: 'first_name',
                        type: 'text',
                        className: 'input_small',
                        errorClass: 'inputError',
                        groupClass: 'formClass left'
                    },
                    {
                        name: 'last_name',
                        type: 'text',
                        className: 'input_small',
                        errorClass: 'inputError',
                        groupClass: 'formClass right'
                    },
                    {
                        name: 'email',
                        type: 'email',
                        className: 'input_big',
                        errorClass: 'inputError',
                        groupClass: 'formClass large'
                    },
                    {
                        name: 'phone_number',
                        type: 'phone_number',
                        className: 'input_small',
                        errorClass: 'inputError',
                        groupClass: 'formClass small left'
                    },
                    {
                        name: 'password',
                        type: 'password',
                        className: 'input_small',
                        errorClass: 'inputError',
                        groupClass: 'formClass small right',
                        listClass: 'req_list'
                    },
                    {
                        name: 'agree_1',
                        type: 'checkbox',
                        text: languageManager.agreement_first,
                        //errorClass: 'inputError',
                        links: [{text: 'Privacy Policy', to: '/'}],
                        groupClass: 'checkbox_text'
                    },
                    {
                        name: 'agree_2',
                        type: 'checkbox',
                        text: languageManager.agreement_second[0],
                        //errorClass: 'inputError',
                        links: [
                            {
                                text: languageManager.agreement_second[1],
                                to: '/terms'
                            },
                            {
                                text: languageManager.agreement_second[2],
                                to: '/privacy'
                            }
                        ],
                        groupClass: 'checkbox_text'
                    }
                ],
                button: {
                    className: 'button_forward',
                    text: languageManager.button
                },
                supportText: {
                    className: 'support_text',
                    image: {},
                    main: languageManager.more_title[0],
                    tooltip: languageManager.more_decription
                }
            }
        ];
        return (
            <section className="MidSection">
                <Faq languageManager={this.props.languageManager}/>
                <FamousNames languageManager={this.props.languageManager}/>

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
