import React, {Component} from 'react'

export default class Faq extends Component {
    render () {
        let languageManager = this.props.languageManager();
        return (
            <div className="Faq">
                <div className="container">
                    <h3 className="section-heading">
                        {languageManager.faq_title}
                    </h3>
                    <p className="section-subtitle">
                        {languageManager.faq_subtitle}
                    </p>
                    <div className="faq-list">
                        {
                            languageManager.faq_questions.map((item, i)=> {
                                return (
                                    <div className="faq-item" key={i}>
                                        <div className="wrap">
                                            <div className="heading">
                                                <div className="badge">
                                                    <span>Q{i+1}</span>
                                                </div>
                                                <h3>
                                                    {item.q}
                                                </h3>
                                            </div>
                                            <div className="descr">
                                                <div className="badge">
                                                    <span>A{i+1}</span>
                                                </div>
                                                <p>
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        )
    }
}