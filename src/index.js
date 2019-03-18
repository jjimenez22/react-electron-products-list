import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCartPlus,
    faCashRegister,
    faFileContract,
    faHandHoldingUsd,
    faIdBadge,
    faShoppingCart,
    faUsers,
    faWindowClose
} from '@fortawesome/free-solid-svg-icons'
import {Provider} from "react-redux";
import Store from "./reducers/store";

//add icons to be used
library.add(faCashRegister, faFileContract, faUsers, faShoppingCart, faHandHoldingUsd, faIdBadge, faWindowClose, faCartPlus);

//render react app
ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
