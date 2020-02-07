import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import './style.css';
import './style.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LpFramework, LpFrameworkWrapper } from 'sb-lp-framework'
import * as versions from './versions'

ReactDOM.render(
    <LpFramework
        funnel_name={"CryptoCrash Fortune"}
        resourceFile={versions}>
        <LpFrameworkWrapper Component={App}/>
    </LpFramework>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();