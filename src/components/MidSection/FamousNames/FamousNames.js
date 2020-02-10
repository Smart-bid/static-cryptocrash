import React, {Component} from 'react'

//Images
import camilla from './img/camila-russo.jpg'
import steve from './img/steve-jobs.jpg'
import mike from './img/mike-novogratz.jpg'
import john from './img/john-mcafee.jpg'
import richard from './img/richard-branson.jpg'
import warren from './img/warren-buffett.jpg'

export default class FamousNames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: {
                camilla,
                steve,
                mike,
                john,
                richard,
                warren
            }
        }
    }

    render() {
        let languageManager = this.props.languageManager();
        return (
            <section className="famous-names">
                <div className="container">
                    <h3 className="section-heading">
                        {languageManager.famous_title}
                    </h3>
                    <p className="section-subtitle">
                        {languageManager.famous_subtitle}
                    </p>
                    <div className="famous-name-list">
                        {languageManager.famous_names.map((item, index) => {
                            return (
                                <div className="famous-person" key={index}>
                                    <div className="wrap">
                                        <div className="img">
                                            <img src={this.state.images[item.img]} alt={item.name}/>
                                        </div>
                                        <div className="person-info">
                                            <h4 className="name">{item.name}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}