import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCashRegister, faFileContract, faUsers, faShoppingCart, faHandHoldingUsd, faIdBadge, faWindowClose} from '@fortawesome/free-solid-svg-icons'

//add icons to be used
library.add(faCashRegister, faFileContract, faUsers, faShoppingCart, faHandHoldingUsd, faIdBadge, faWindowClose);

//render react app
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
