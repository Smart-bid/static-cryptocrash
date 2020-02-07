import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RegformStyles from './Regform.scss'

import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

import {ReactComponent as Check} from './check.svg'
import {ReactComponent as Mark} from './excl.svg'
import lock from './lock.svg'
import logo from '../../BottomSection/bcprofitmin.svg'


export default class Regform extends Component {
    constructor(props) {
        super(props)

        this.inputs = ['first_name', 'last_name']

        this.tooltips = {};
        this.passtest = {};

        ['invalidlength', 'nospecial', 'nolowercase', 'nouppercase', 'nonumber'].map((err, index) => this.passtest[err] = this.props.languageManager().passtest[index])

    }


    updateValue(value, key, callback) {
        let obj = {},
            tempForm = this.props.syncState.form
        obj[key] = value
        Object.assign(tempForm, obj)

        new Promise((resolve, reject) => resolve(this.props.syncForms(tempForm))).then(callback)
    }

    handleForward() {
        let validate = this.props.validateParams(this.props.syncState.form)

        if (validate.success) this.props.setLeadData(this.props.syncState.form)
            .then(this.props.handleStep(this.props.syncState.step + 1))
            .then(() => {
                if (this.props.syncState.step === 2) this.props.handleLeadStep()
            })
            .then(() => this.props.syncErrors({password: {empty: true}}))
        else this.props.syncErrors(validate.errors)
    }

    handleSubmit() {
        this.props.handleStep(this.props.syncState.step + 1)

        this.props.setLeadData(this.props.syncState.form)
            .then(this.props.handleSubmit)
            .then(res => (res.redirectUrl) ? window.location = res.redirectUrl : this.props.syncErrors({responseError: res.error}))
            .then(this.props.handleStep(5))
    }

    toggleTooltip(input) {
        if (this.tooltips[input]) this.tooltips[input].style.opacity = 0
    }

    checkPass(pass) {
        let valid = this.props.validateInput({password: pass})
        this.props.syncErrors(valid)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.syncState.errors !== this.props.syncState.errors)
            Object.keys(this.tooltips).map(input => {
                if (this.tooltips[input]) this.tooltips[input].style.opacity = 1
            })
    }

    render() {
        let version = this.props.languageManager()

        if (this.props.syncState.step <= 3) {
            return (
                <div className={"Regform regform" + (this.props.class ? this.props.class : '')}
                     ref={this.setTextInputRef}>

                    <div className='inner component-form-registration'>
                        <div
                            className={'form-wrapper one form__wrapper' + ((this.props.syncState.step > 1) ? ' step' : '')}>
                            <div className="form__block">
                                <div className="form__field-row">
                                    {this.inputs.map(input =>
                                        <div className="form__field-group form__field-group-w50 form__field-type"
                                             key={input}>
                                            <input
                                                onChange={e => this.updateValue(e.target.value, input)}
                                                onFocus={() => this.toggleTooltip(input)}
                                                type="text" name={input}
                                                placeholder={version[input]}
                                                value={this.props.syncState.form[input]}
                                                required={true}/>
                                            <label>{version[input]}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="form__field-row">
                                    <div className="form__field-group form__field-group-w100 form__field-type">
                                        <input type="email" name="email" placeholder={version.email}
                                               value={this.props.syncState.form.email}
                                               onChange={e => this.updateValue(e.target.value, 'email')}/>
                                        <label>{version.email}</label>
                                    </div>
                                </div>
                                <div className="form__field-row">
                                    <div className="form__field-group form__field-group-w50 form__field-type">
                                        <IntlTelInput
                                            preferredCountries={[this.props.countryCode]}
                                            containerClassName="intl-tel-input form__field-state-focus"
                                            inputClassName="inputfield tel"
                                            autoPlaceholder={true}
                                            value={this.props.syncState.form.phone_number}
                                            onPhoneNumberChange={(a, value, b) => {
                                                value = value.replace(/\D/g, '');
                                                this.updateValue(value, 'phone_number')
                                            }}/>
                                       <label>{version.phone}</label>
                                    </div>
                                    <div className="form__field-group form__field-group-w50 form__field-type">
                                        <input className="inputfield password" type="password" maxLength="8"
                                               onChange={e => this.updateValue(e.target.value, e.target.name, this.checkPass(e.target.value))}
                                               name="password" placeholder={version.password}/>
                                        <label>{version.password}</label>
                                        {/*<ul className='req'>*/}
                                        {/*    {Object.keys(this.passtest).map(key => {*/}
                                        {/*        return (*/}
                                        {/*            <li className={(this.props.syncState.errors.password && (this.props.syncState.errors.password[key] || this.props.syncState.errors.password.empty)) ? '' : 'f'}*/}
                                        {/*                key={key}>{this.passtest[key]}</li>)*/}
                                        {/*    })}*/}
                                        {/*</ul>*/}
                                    </div>
                                </div>
                                <div className="form__field-row">
                                    <div className="form__field-group form__field-group-w100 form__field-checkbox">
                                        <label>
                                            <input type="checkbox" name="agree_one"/>
                                            <span>{version.req1[0]} </span>
                                        </label>
                                    </div>
                                    <div className="form__field-group form__field-group-w100 form__field-checkbox">
                                        <label>
                                            <input type="checkbox"
                                                   className='accept'
                                                   checked={this.props.syncState.form.agree_2}
                                                   name="agree_2"
                                                   onChange={e => {this.toggleTooltip(e.target.name); this.updateValue(e.target.checked, e.target.name)}}/>
                                                <span>{version.req2[0]}
                                                    <a href="/terms">{version.req2[1]}</a> {version.req2[2]}
                                                    <a href="/privacy">{version.req2[3]}</a>
                                                </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form__field-row">
                                <button className="form_button-submit"
                                        onClick={this.handleSubmit.bind(this)}>{version.button_last}</button>
                            </div>

                            <div className="form__field-row">
                                <div className="form__field-gdpr">
                                    <img src={lock} alt="lock"/>
                                    <span>
                                        {version.bottominfo[0]}<br/>
                                        {version.bottominfo[1]}<br/>
                                        <span className="form__field-gdpr-tooltiplink">
                                            {version.more}
                                            <span className="form__field-gdpr-tooltiptext">
                                                {version.morebox}
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/*<div className="bottominfo">*/}
                            {/*    */}
                            {/*    */}
                            {/*    <div className="more" onMouseOver={() => this.infoBox.style.opacity = "1"}*/}
                            {/*         onMouseOut={() => this.infoBox.style.opacity = "0"}>{version.more}</div>*/}
                            {/*    <div className="morebox" ref={ref => this.infoBox = ref}>{version.morebox}</div>*/}
                            {/*</div>*/}
                        </div>
                        <div className='form-wrapper three'>

                        </div>
                    </div>

                </div>
            )
        } else {
            return (
                <div className={"Regform " + (this.props.class ? this.props.class : '')} ref={this.setTextInputRef}>
                    <div className="inner">
                        {(this.props.syncState.step === 4) ? <img src={logo} alt="lodaing" className="loading"/> :

                            <div className={'form-wrapper'}>

                                <span className="response_error">{this.props.syncState.errors.responseError}</span>
                                <button className='start' onClick={() => this.props.handleStep(1)}>OK</button>

                            </div>

                        }
                    </div>
                </div>
            )
        }
    }
}


