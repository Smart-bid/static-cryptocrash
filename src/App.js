import React, { Component } from 'react'

import TopSection from './components/TopSection/TopSection'
import MidSection from './components/MidSection/MidSection'
import BottomSection from './components/BottomSection/BottomSection'
import Page from './pages/Page'
import { BrowserRouter as Router} from "react-router-dom";

// Pages
import * as Pages from './pages'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                agreementCheck: false,
            },
            errors: {
                password: {
                    empty: true,
                }
            },
            step: 1,
            page: 'main',
            hide: false
        };

        this.pageHandler = this.pageHandler.bind(this);
    }

    componentDidMount() {
        if(this.props.language === 'ar') {
            document.body.classList.add('direction-rtl')
            document.body.setAttribute('dir','rtl')
        }
    }

    pageHandler(page) {
        window.scrollTo(0, 0);

        switch (page) {
            default:  
                this.setState({page: 'main'});
                break;
            case 'terms':
                this.setState({page: Pages.terms});
                break;
            case 'privacy':
                this.setState({page: Pages.privacy});
                break;
            case 'gov':
                this.setState({page: Pages.gov});
                break;
            case 'disc':
                this.setState({page: Pages.disc});
                break;
            case 'spam':
                this.setState({page: Pages.spam});
                break;
        }

    }

    hidePrivacyBlock = () => {
        this.setState({ rerender: ''})
        document.cookie = "privacy=agree; max-age=1800000"
    };

    render() {
        const display = {
            bottom: '-800px'
        };
        let languageManager = this.props.languageManager();
        if (this.state.page === 'main') {
            return (
                <Router>
                    <div className='App'>

                        <TopSection {...this.props}
                                    handleStep={(step) => this.setState({step})}
                                    syncForms={(form) => this.setState({form})}
                                    syncErrors={(errors) => this.setState({errors})}
                                    syncState={this.state}/>

                        <MidSection {...this.props}
                                    handleStep={(step) => this.setState({step})}
                                    syncForms={(form) => this.setState({form})}
                                    syncErrors={(errors) => this.setState({errors})}
                                    syncState={this.state}/>

                        <BottomSection {...this.props}
                                       pageHandler={this.pageHandler}/>

                        <div className="privacy-policy" style={(document.cookie.indexOf('privacy') !== -1) ? display : {}}>
                            <div className="privacy-inner">
                                <span>{languageManager.bottom_info[0]}<a onClick={() => this.pageHandler('privacy')}>{languageManager.bottom_info[1]}</a></span>
                                <span className="buttons">
                                    <button onClick={this.hidePrivacyBlock} className="btn-ok">{languageManager.bottom_info[2]}</button>
                                    <a onClick={() => this.pageHandler('spam')}>{languageManager.bottom_info[3]}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </Router>
            )
        } else {
            return (
                <Page page={this.state.page} pageHandler={this.pageHandler}></Page>
            )
        }
    }
}
