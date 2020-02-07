import React, {Component} from 'react'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

import logo from '../Header/logo.svg'
import {func} from "prop-types";

export default class Regform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            firstCheck: false,
            showText: false
        };
        this.passtest = {};
        ['invalidlength', 'nospecial', 'nolowercase', 'nouppercase', 'nonumber'].map((err, index) => this.passtest[err] = this.props.languageManager().passtest[index])

        this.inputs = ['first_name', 'last_name'];
    }

    updateValue(value, key, callback) {
        let obj = {},
            tempForm = this.props.syncState.form
        obj[key] = value
        Object.assign(tempForm, obj)

        new Promise((resolve, reject) => resolve(this.props.syncForms(tempForm))).then(callback)
    }

    handleSubmit() {
        let validate = this.props.validateParams(this.props.syncState.form)
        if (validate.success && this.props.syncState.form.agreementCheck)
            this.props.setLeadData(this.props.syncState.form)
                .then(this.props.handleStep(this.props.syncState.step + 1))
                .then(this.props.handleSubmit)
                .then(res => (res.redirectUrl) ? window.location = res.redirectUrl : this.props.syncErrors({responseError: res.error}))
        else this.props.syncErrors(validate.errors)
    }

    checkPass(pass) {
        let valid = this.props.validateInput({password: pass})
        this.props.syncErrors(valid)
    }

    //Focus Phone
    focusPhone() {
        this.setState({focused: true})
    }

    unFocusPhone() {
        this.setState({focused: !this.state.focused})
    }

    render() {
        let languageManager = this.props.languageManager();

        if (this.props.syncState.step === 1) {
            return (
                <div className="Regform">
                    <div className='inner'>

                        <div className='form-wrapper one'>
                            <div className="form-group flex">
                                {this.inputs.map((input, index) => {
                                    return (
                                        <div className="form-input" key={index}>

                                            <input
                                                className={'form-control ' + input}
                                                type="text" name={input}
                                                placeholder={languageManager[input]}
                                                value={this.props.syncState.form[input]}
                                                onChange={(e) => this.updateValue(e.target.value, input)}/>

                                            {((this.props.syncState.errors[input] && this.props.syncState.errors[input].messages)) ?
                                                <div
                                                    className={(this.props.syncState.errors[input].messages) ? 'error active' : 'error'}>
                                                    <span>{this.props.syncState.errors[input].messages[0]}</span>
                                                </div> : ''}
                                            <label className="like-placeholder">{languageManager[input]}</label>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="form-group">
                                <div className="form-input">
                                    <input
                                        className="form-control email"
                                        type="text" name="email"
                                        placeholder={languageManager.email}
                                        value={this.props.syncState.form.email}
                                        onChange={(e) => this.updateValue(e.target.value, 'email')}/>

                                    {(this.props.syncState.errors.email && this.props.syncState.errors.email.messages) ?
                                        <div
                                            className={(this.props.syncState.errors.email.messages) ? 'error active' : 'error'}>
                                            <span>{this.props.syncState.errors.email.messages[0]}</span>
                                        </div> : ''}
                                    <label className="like-placeholder">{languageManager.email}</label>
                                </div>
                            </div>
                            <div className="form-group flex">
                                <div className={this.state.focused ? 'form-input focused' : 'form-input'}
                                     onFocus={this.focusPhone.bind(this)} onBlur={this.unFocusPhone.bind(this)}>
                                    <IntlTelInput
                                        preferredCountries={[this.props.countryCode]}
                                        defaultCountry={this.props.countryCode.toLowerCase()}
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control tel"
                                        autoPlaceholder={true}
                                        //separateDialCode={true}
                                        value={this.props.syncState.form.phone_number}
                                        onPhoneNumberChange={(e, value) => this.updateValue(value.replace(/\D/g, ''), 'phone_number')}
                                    />
                                    <label className="like-placeholder">{languageManager.phone_number}</label>
                                </div>
                                <div className="form-input password">
                                    <input
                                        className="form-control password"
                                        type={this.state.showText ? 'text' : 'password'} name="password"
                                        placeholder={languageManager.password}
                                        value={this.props.syncState.form.password}
                                        onChange={(e) => this.updateValue(e.target.value, 'password', this.checkPass(e.target.value))}/>
                                    <label className="like-placeholder">{languageManager.password}</label>
                                    <span className="showPass" onClick={() => this.setState({showText: !this.state.showText})} > </span>

                                    <ul className='req'>
                                        {Object.keys(this.passtest).map(key => {
                                            return (
                                                <li className={(this.props.syncState.errors.password && (this.props.syncState.errors.password[key] || this.props.syncState.errors.password.empty)) ? 'default' : 'correct'}
                                                    key={key}>{languageManager.passtest[key]}</li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group agreement">
                                <div className="form-input agreement">
                                    <input type="checkbox" checked={this.state.firstCheck} onChange={() => {}}/>
                                    <label onClick={() => this.setState({firstCheck: !this.state.firstCheck})}>
                                        {languageManager.agreement_first}
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className={(this.props.syncState.form.agreementCheck) ? 'form-input agreement' : 'form-input agreement error'}>
                                    <input type="checkbox" checked={this.props.syncState.form.agreementCheck} onChange={() => {}}/>
                                    <label
                                        onClick={() => this.updateValue(!this.props.syncState.form.agreementCheck, 'agreementCheck')}>
                                        {languageManager.agreement_second[0]}
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <button onClick={this.handleSubmit.bind(this)} className="registerBtn">
                                    <span>{languageManager.button}</span>
                                </button>
                            </div>

                            <div className="notification">
                                <div className="info">
                                    <p>
                                        {languageManager.more_title[0]}
                                    </p>
                                    <div className="dropdown-btn">
                                        <span>{languageManager.more_title[1]}</span>
                                        <div className="dropdown">
                                            <p>
                                                {languageManager.more_decription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        } else {
            return (
                <div className="Regform">
                    {(this.props.syncState.errors.responseError) ?
                        <div className="response-error">
                            <p>{this.props.syncState.errors.responseError}</p>
                            <button className="btn-ok" onClick={() => this.props.handleStep(1)}>Ok</button>
                        </div>
                        : <img src={logo} alt="lodaing" className="loading-logo"/>}
                </div>
            )
        }
    }
}
